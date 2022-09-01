var Person = require('./person');
var Statue = require('./statue');

class Medusa{
  constructor(name){
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim){
    var newStatue = new Statue(victim.name);

    if(this.statues.length<3){
      this.statues.push(newStatue);
    }
    else{
      var stoneName = this.statues[0].name;
      var freedPerson = new Person (stoneName, "relieved");
      this.statues.shift();
      this.statues.push(newStatue);
      return freedPerson;
    }
  }

}

module.exports = Medusa;
