
//'NOTE: Quokka extension tool used to create this File. We can see output even when typing'

let str = 'Shaji Sebastian'
console.log(str)

let name = new String("Shaji") // object
let name1 = 'Shaji'

console.log(name == name1) // True. It does type conversion and checks the value
console.log(name === name1) // False. It will not be equal as type is different

let num1 = 1;
let num2 = "1"; 
console.log(num1 == num2); //True
console.log(num1 === num2); //False

console.log(typeof str)
console.log(typeof name)

// when we compare two string values use ===
// when we compare two objects use ==

//= is used for assigning values to a variable in JavaScript

let a = "1";
let b = "10";
console.log(a + b); //110. It appends


console.log(str.concat(name));
console.log(str.toUpperCase())
console.log(str.toLowerCase())

console.log(str.startsWith('Shaji'));
console.log(str.search('j'));
console.log(str.includes('t'));
console.log(str.split(" "));
let words = str.split(' ')
words.forEach(ele => {
    console.log(ele);
})



let str2 = " Welcome JS "
console.log(str2.trim())
let length = str2.length

console.log(str2.charAt(1))
console.log(str2.charAt(length-1)) //last character
console.log(str2.substring(0,5))
console.log(str2.replace('JS','Java Script'))

