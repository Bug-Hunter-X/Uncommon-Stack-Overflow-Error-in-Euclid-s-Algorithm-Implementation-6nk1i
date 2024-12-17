function foo(a, b) {
  if (a === b) {
    return true;
  }
  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}
console.log(foo(12, 18)); // Output: true
console.log(foo(15, 25)); // Output: true
console.log(foo(10, 20)); // Output: true
console.log(foo(13, 11));// Output: true
console.log(foo(9, 12)); // Output: true
console.log(foo(100,200)); //Output: true
console.log(foo(50, 100)); //Output: true