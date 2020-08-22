let numbers = [1,2,3,4,5];
console.log(numbers)
console.log(numbers[5])
console.log(numbers.length);

let fruits = ['Apple','Orange','Banana'];   
console.log(fruits);

let x;
for (x in fruits){
    console.log(fruits[x])
}

for (x of fruits){
    console.log(x);
}

fruits.forEach(eachFruit =>{
    console.log(eachFruit)
})

console.log(fruits.includes('apple')) // returns bollean value True or False
console.log(fruits.indexOf('mango'));
console.log(fruits.sort());
console.log(fruits.reverse())

let digits = new Array(1,2,3,4,5);
console.log(digits);
console.log(digits[1]);

//Manipulation in Arrays

digits[0]=0;
console.log(digits);

digits.push(6); // adding at the end
console.log(digits);

digits.push(6,7,8); // adding at the end
console.log(digits);

digits.pop(); // removing one from the end
console.log(digits);

numbers.unshift(-1) // adding at start position
console.log(digits);

digits.shift(); // removing first value
console.log(digits);

// digits.fill(0) // filling Zero in all positions
// console.log(digits);

digits.fill(0,1,3) // filling Zero in positions 1 to 3
console.log(digits);

let newArray = digits.concat(fruits);
console.log(newArray);

console.log(fruits.join(' => '))




