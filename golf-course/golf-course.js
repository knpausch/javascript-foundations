class GolfCourse {
  constructor(name, difficulty, openings, features){
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(listOfPlayers){
    if(listOfPlayers.length<this.openings){
      this.openings -= listOfPlayers.length;
      for(var i = 0; i<listOfPlayers.length;i++){
          this.currentlyPlaying.unshift(listOfPlayers[i].name);
      }
      return "You\'re checked in. Have fun!";
    }
    else{
      return "Sorry, we are currently booked! Please come back later.";
    }
  }

}

module.exports = GolfCourse;
