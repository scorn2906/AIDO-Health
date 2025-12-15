## 6. Debugging : Cari Bug

Ada Bug di Fungsi Ini :

```js
function sum(a, b) {
  if (!a || !b) return 0;
  return a + b;
}
```

Pertanyaan : Apa yang salah? Berikan contoh input yang gagal.

Jawaban:

Yang salah dari codingan in yaitu pada perkondisian if(!a || !b) return 0 dimana validasi seperti ini tidak cukup kuat untuk menjaga function tersebut berjalan dengan baik, karena pada javascript tidak dijelaskan apakah type variable a dan b itu harus integer atau bukan sehingga apabila params yang dikirim berupa string maka function tersebut akan mereturn string tersebut dengan cara menambahkannya seperti a=2 b=”f” maka return yang dihasilkan yaitu 2f yang mana itu berarti salah, seharusnya return yang benar adalah 0 karena f bukanlah number atau integer.

```js
function sum(a, b) {
  if (!a || !b) return 0;
  return a + b;
}
console.log("contoh input yang salah");
console.log(sum("f", 2));
console.log(sum("3", 2));
console.log(sum("", 2));
console.log(sum(0, 2));

console.log("=======================");

function sumAfterFixed(a, b) {
  return typeof a !== "number" || typeof b !== "number" ? 0 : a + b;
}
console.log("contoh input yang salah setelah diperbaiki");
console.log(sumAfterFixed("f", 2));
console.log(sumAfterFixed("3", 2));
console.log(sumAfterFixed("", 2));
console.log(sumAfterFixed(0, 2));
console.log(sumAfterFixed(10, 2));
```
