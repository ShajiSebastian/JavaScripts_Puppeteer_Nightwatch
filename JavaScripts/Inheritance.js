
class Car{
    setName(Name){
        this.name = Name;
    }

    startEngine(){
        console.log('Engine started for ' + this.name);
    }

    stopEngine(){
        console.log('Engine stopped for ' + this.name);
    }
}

class Toyota extends Car{
    topSpeed(speed){
        console.log('TopSpeed for '+ this.name + ' is ' + speed);
    }
}

let myCar = new Toyota();
myCar.setName('Maruthi');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);