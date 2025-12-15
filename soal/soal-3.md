## 3. Refactoring / Code Review : Perbaiki Kode

Identifikasi masalah dan refactor :

```js
function getUserData(id) {
    const user = await axios.get("/api/users/" + id);
    const posts = await axios.get("/api/posts/" + id);
    return { user: user.data, posts: posts.data };
}
```

Tugas Kandidat :

1. Bagaimana menangani error?
2. Bisakah dibuat paralel?
3. Apa risiko jika axios.get gagal?

Jawaban : <br>
Sebelum menjawab pertanyaan saya rasa ketika dijalankan function tersebut akan error karena didalam function tersebut menerapkan asynchronous yang ditandai dengan `await` tetapi pada function tidak mendeclare bahwa function tersebut merupakan function asynchronous, contohnya seperti `async funticon getUserData(id)`

1.Untuk meanagani error pada function getUserData bisa melakukan dengan berbagai cara:

- Tambahkan validasi pada id dimana apabila id null atau kosong maka prosess pengambilan data user dan posts tidak dilakukan dan akan memberikan return error dengan message bahwa id required
- Menggunakan try catch agar ketika terjadi error kita dapat mengontrol error tersebut seperti contohnya mengambalikan atau mereturn error message ke frontend dan sebagainya
- Memasang logger agar dapat memudahkan debugging ketika terjadi error

2. function tersebut bisa dibuat paralel dengan menggunakan promise all pada javascript dengan begitu kedua perintah get user dan get post dapat dilakukan secara bersamaan

3. Karena function getUserData ini tanpa menggunakan validasi, dan handle error maka ketika `axios.get` gagal maka beberapa case error akan terjadi, seperti:

- secara user experiencce akan berantakan atau buruk karena secara UX user tidak tau apa yang sebenarnya terjadi karena tidak ada balikan atau response yang jelas kepada sisi frontend
- aplikasi pada backend akan crash karena handle rejection yang tidak ditangani dengan baik
- value `user.data` dan `posts.data` tentunya akan kosong
- Akan membuat kesulitan bagi developer untuk melakukan debugging kedepannya apabila terjadi error atau gagal karena tidak adanya logger ataupun error handling pada function geUserData

berikut code yang setelah diperbaiki

```js
async function getUserData(id){
    if(!id){
        throw new Error("Id is required")
    }
    try{
        const [user, posts] = await Promise.all([
            axios.get(`/api/users/${id}`)
            axios.get(`/api/posts/${id}`)
        ])

        return {user: user.data, posts: posts.data}
    } catch(err) {
        throw err
    }
}
```
