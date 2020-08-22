//simple function
function add1(){
    console.log("Called Simple function");
}
add1();

//simple function with parameters
function add2(a,b){
    console.log('Simple function with parameter',a + b);
}
add2(2,8);



//storing result of return value to a variable
function add3(a,b){
    return (a + b);
}
let result= add3(10,5);
console.log('Storing retured value to a variable',result);


//function using arrow keyword
let add4 = (a,b) => {
    console.log('Fucntion with arrow and parameter', a+b);
}
add4(1,2);

//function using arrow keyword with no parameters
let add5 = () => {
    console.log('Function with arrow and No parameter');
}
add5();

// () => {
//     console.log('Function without name');
// }
// ();

