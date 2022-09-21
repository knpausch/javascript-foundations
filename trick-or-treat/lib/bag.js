class Bag {
  constructor(){
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy){
    this.candies.push(candy);
    this.count++;
  }

  contains(candyName){
    if(this.candies[0].type === candyName){
      return true;
    }
    else{
      return false;
    }
  }
}

module.exports = Bag;
