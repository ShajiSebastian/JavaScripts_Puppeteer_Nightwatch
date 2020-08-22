class Animal{
    constructor(Name){
        this.name = Name;
    }

    eats(){
        console.log(this.name +' eats food')
    }
}

let animal = new Animal ('Dog');
animal.eats();

class Alligator extends Animal {
    eats(){
        super.eats(); // takes value from one class above
        console.log (this.name + 'eats fishes');
    }
}

let murphy = new Alligator('Murphy')
murphy.eats();

//comment eats() in Alligator class. Then we can see that eats() given in class Animal gets executed. This is method overriding