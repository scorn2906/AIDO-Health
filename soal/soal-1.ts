function sortOddOnly(arr: number[]): number[] {
  const oddNumbers = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  return arr.map((num) => (num % 2 !== 0 ? oddNumbers.shift()! : num));
}

console.log(sortOddOnly([5, 8, 6, 3, 4]));
// Output: [3, 8, 6, 5, 4]
console.log(sortOddOnly([9, 2, 8, 7, 6, 5]));
// Output: [5, 2, 8, 7, 6, 9]
