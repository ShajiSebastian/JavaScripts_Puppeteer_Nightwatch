// To run, got to the folder and type 'node filename' in terminal

function Employee(Name, Age, BaseSalary){
    this.name = Name;
    this.age = Age;
    this.baseSalary = BaseSalary;

    this.getEmpDetails = function (){
        console.log ('Nmae: '+ this.name +' | Age:' + this.age);
    }
}

let emp1 = new Employee('Christo',7,2000);
emp1.getEmpDetails();