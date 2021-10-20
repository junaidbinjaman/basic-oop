class Tiger {
  #speed = 100;
  constructor (name) {
    this.name = name;
    this.#speed = 125;
  }
  run() {
    console.log(`I am ${this.name}, I am running at mph ${this.#speed}`);
  }
};

const royal = new Tiger('royal bangol');

royal.run();