class Snowman {
  constructor({carrots: myCarrots, coal: myCoal, buttons: myButtons, snowballs: mySnowballs}) {
    this.carrots = myCarrots;
    this.coal = myCoal;
    this.buttons = myButtons;
    this.snowballs = mySnowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      this.magicHat = false;
    } else {
    this.magicHat = true;
    }
  }
}

module.exports = Snowman;
