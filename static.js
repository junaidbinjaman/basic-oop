class Animal{
  static category = 'dog';
  loca
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  static compare(animal1, animal2) {
    if(animal1.speed > animal2.speed) {
      return `${animal1} is faster`
    }else {
      return `${animal2} is faster`
    }
  }
}

const myRat = new Animal('rat', 12);
console.log(Animal.compare({speed: 10}, {speed: 6}));