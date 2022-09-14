class Craft {
  constructor(craftItem){
    this.name = craftItem.type;
    this.materials = craftItem.materials;
    this.completed = false;
  }

  completeCraft(){
    this.completed = true;
    return "All done! It looks great!";
  }

  calculateProjectTotal(){
    var total;
    var material1Price = this.materials[0].price;
    var material1Amount = this.materials[0].amount;

    var material2Price = this.materials[1].price;
    var material2Amount = this.materials[1].amount;

    total = (material1Price * material1Amount) + (material2Price * material2Amount);
    return total;
  }
}

module.exports = Craft;
