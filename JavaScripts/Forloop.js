let i = 10

for (i=1;i<=10;i++){
    console.log('value of is is:'+i);
}

let fruits = ['Apple','Orange','Banana'];

console.log(fruits);

let x;
for (x in fruits){
    console.log(fruits[x])
}

for (x of fruits){
    console.log(x);
}