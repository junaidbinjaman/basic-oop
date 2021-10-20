class PenDrive {
  constructor(capacity, color, price) {
    this.capacity = capacity;
    this.color = color;
    this.price = price;
  }
} 

const ignite = new PenDrive('36GB', 'white', 1300);
console.log(ignite);
const oakWood = new PenDrive('4GB', 'black');
console.log(oakWood);


function StickyNode (color, price) {
  this.color = color;
  this.price = price;
}

const yellow = new StickyNode('Yellow', 20);
console.log(yellow);
