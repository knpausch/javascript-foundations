class Unicorn {
  constructor(name, color) {
    this.color = color || "white";
    this.name = name;
  }
  isWhite()
  {
    var isWhite;
    if (this.color === "white")
    {
      isWhite = true;
    }
    else
    {
      isWhite = false;
    }
    return isWhite;
  }

  says(greeting)
  {
    var newGreeting = `**;* ${greeting} *;**`;
    return newGreeting;
  }
}

module.exports = Unicorn;
