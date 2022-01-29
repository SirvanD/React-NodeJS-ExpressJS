class Monkey {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.foodsEaten = [];
  }

  eat(food) {
    this.foodsEaten.push(food);
  }

  introduce() {
    return this.name + "(" + this.species + ")";
  }
}

module.exports = Monkey;
