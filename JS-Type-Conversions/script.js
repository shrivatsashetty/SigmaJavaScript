console.log(Number("3.14")); // 3.14
console.log(Number("")); // 0
console.log(Number("Hello")); // nan
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // nan
console.log(Number(NaN)) // nan
console.log((3.14159265359).toFixed(3)) // 3.142


console.log(String("")); // ""
console.log(String(3.14)); // "3.14"
console.log(String(true)); // "true"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)) // "NaN"
console.log(true.toString()); // "true"
console.log((123).toString()); // "123"
console.log((1_000_000).toExponential()) // "1e+6"


console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")) // true
console.log(Boolean(NaN)) // false
