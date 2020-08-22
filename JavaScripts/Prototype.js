let EmpDetails = function(Name, Age){
    this.name= Name;
    this.age= Age;

    // this.getName = function(){
    //     return this.name;
    // }

    // this.getAge = function(){
    //     return this.age;
    // }
}

EmpDetails.prototype.getName = function(){
    return this.name;
}

EmpDetails.prototype.getAge = function(){
    return this.age;
}

let emp1 = new EmpDetails('Christo',5);
let emp2 = new EmpDetails('Jisto',2);

console.log(emp1.getName());
console.log(emp2.getAge());