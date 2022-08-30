var foodCounter = 0;

class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  }

  greet()
  {
    var greeting = `Hi, ${this.rider}!`
    return greeting;
  }

  eat()
  {
    foodCounter++;

    if (foodCounter >= 3)
    {
      this.hungry = false;
    }
  }

}
module.exports = Dragon;
