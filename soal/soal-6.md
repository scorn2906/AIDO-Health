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
