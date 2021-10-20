class Animal {
  constructor() {

  }
  talk() {
    throw new Error ("Your must implement talk method");
  }
}

class Cat extends Animal {
  talk() {
    console.log('meow, meow');
  }
}

class Dog extends Animal {
  talks() {
    console.log('dark dard');
  }
  talk() {
    console.log('dark dard');
  }
}

const myCat = new Cat();
myCat.talk();

const myDog = new Dog();
myDog.talk();