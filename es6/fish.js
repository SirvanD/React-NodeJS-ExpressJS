class Fish {
  constructor(name) {
    //properties
    this.name = name;
    this.health = 10;
  }
  //behavior
  sleep() {
    this.health = this.health + 1;
  }
}

module.exports = Fish;
