class Employee{
    setDetails(Name,ID,PhoneNumber){
        this.name = Name;
        this.id = ID;
        this.phoneNumber = PhoneNumber;
    }


getEmpName(){
    return this.name;
}
getEmpdID(){
    return this.id;
}
getPhoneNumber(){
    return this.phoneNumber;
}

}

let emp1 = new Employee();

emp1.setDetails('Jency',1001,7994530762);
console.log(emp1.getEmpName());
console.log(emp1.getEmpdID());
console.log(emp1.getPhoneNumber());

