class Employee{
    setDetails(Name,ID){
        this.name = Name;
        this.id = ID;
    }
}

let emp1 = new Employee();
emp1.setDetails('Christo','A-4600');
console.log(emp1.name);
console.log(emp1.id);

let emp2 = new Employee();
emp2.setDetails('Jisto','B-4600');
console.log(emp2.name);
console.log(emp2.id);