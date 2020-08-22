let x = 10;
let y = '20';

let p = x + y;
let q = x - y;
let r = x * y;
let s = x / y;
let t = y % x;

let result1 = x == y; // == checks only value
let result2 = x === y; // === checks both value and type

console.log('Sum is:',+ p);
console.log('Difference is:',+ q);
console.log('Multiplication is:',+ r);
console.log('Division is:',+ s);
console.log('Reminder is:',+ t);

console.log('Result1 is:',+ result1);
console.log('Result2 is:',+ result2);