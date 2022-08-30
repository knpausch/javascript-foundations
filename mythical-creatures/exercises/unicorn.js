class Unicorn {
  constructor(name, color) {
    if (color === undefined)
    {
      this.color = "white";
    }
    else
    {
      this.color = color;
    }
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
