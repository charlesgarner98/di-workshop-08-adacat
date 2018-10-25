class AdaCat {
  constructor(name, owner) {
    this.name = name //Sets name of cat
    this.owner = owner //Sets owner of cat
    this.hunger = 5 //Sets cat's hunger
    this.isSleeping = false //Sets cat to awake
    this.size = 30 //Sets cat size
  }

  setHunger(newHunger) {
    if (newHunger < 0) {
      newHunger = 0 //Sets lower limit to 0
    }
    if (newHunger > 10) {
      newHunger = 10 //Sets upper limit to 10
    }
    this.hunger = newHunger //Sets cat's hunger
  }

  getDescription() {
    var sleepLine //Creates variable to store a string for if cat is asleep
    if (this.isSleeping) { //If cat is sleeping
      sleepLine = 'Shh! ' + this.name + ' is sleeping.' //Set string to sleeping
    } else {
      sleepLine = this.name + ' is awake.' //Set string to awake
    }
    //An array to store lines for cat's description
    var lines = [
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',

      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + this.getHealth() + '/30.',
      sleepLine
    ]

    return lines.join('\n') //Return string of cats desription
  }

  feed() {
    var hunger = this.hunger - 1 //Reduces hunger

    if (hunger < 3) {
      this.size = this.size + 1 //Increase size if hunger is lower than 3
    }

    this.setHunger(hunger) //call setHunger method
  }

  nap() {
    this.isSleeping = true //Sets cat to sleeping
  }

  wakeUp() {
    this.isSleeping = false //Sets cat to awake
  }

  play() {
    var hunger = this.hunger + 3 //Add hunger
    if (hunger > 7) {
      this.size = this.size - 1 //Reduce size if cat's hunger is greater than 7
    }
    this.setHunger(hunger) //Calls setHunger method
  }

  getHealth() {
    // the ideal weight for cats is 30
    // this futher they are from this, the less
    // healthy they are
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    // sizeScore starts at thirty, and gets
    // smaller as the cat's size gets further
    // from the ideal weight
    var sizeScore = 30 - sizeDifferenceFromIdeal

    // health score gets lower as the cat gets
    // more hungry
    var healthScore = sizeScore - this.hunger

    // max returns the biggest value, so health
    // will never go below 0
    if (healthScore < 0) {
      healthScore = 0
    }

    return healthScore
  }
}

module.exports = AdaCat
