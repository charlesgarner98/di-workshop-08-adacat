var readlineSync = require('readline-sync') //Include readline-sync
var AdaCat = require('./AdaCat') //Include AdaCat file

class CommandLineApp {
  constructor() {
    this.cat = null //Give app a cat variable
  }

  start() {
    this.setup() //Run user setup

    var shouldContinue = true //To create loop
    while (shouldContinue) {
      this.showCatStatus() //Show info about cat (health etc.)
      shouldContinue = this.runCommand() //Run command inputed by user
    }
  }

  setup() {
    var owner = readlineSync.question('What is your name? ') //Give user an input for name
    var name = readlineSync.question('What would you like to name your cat? ') //Give user an input for cat name

    this.cat = new AdaCat(name, owner) //Create cat with inputed values
  }

  runCommand() {
    //Give users an array of options
    var commandIndex = readlineSync.keyInSelect(
      ['Feed cat', 'Play with cat', 'Tell cat to nap', 'Wake up cat'],
      'What would you like to do?'
    )

    if (commandIndex === -1) { //If 0 is pressed
      console.log('byeeeee') //Output text
      return false //Quit game
    } else if (commandIndex === 0) { //If 1 is pressed
      console.log('You feed your cat.') //Output text
      this.cat.feed() //Run feed method for cat
    } else if (commandIndex === 1) { //If 2 is pressed
      console.log('You play with your cat.')//Output text
      this.cat.play() //Run play method for cat
    } else if (commandIndex === 2) { //If 3 is pressed
      console.log('Your cat curls up to sleep.')//Output text
      this.cat.nap() //Run nap method for cat
    } else if (commandIndex === 3) { //If 4 is pressed
      console.log('Your cat wakes up, yawns, and stretches.')//Output text
      this.cat.wakeUp() //Run wakeUp method for cat
    } else { //If anything else is pressed
      console.log("I don't understand :(") //Output text
    }

    return true
  }

  showCatStatus() {
    //Output cat image
    console.log('')
    console.log(' /\\___/\\')
    console.log('( o   o )')
    console.log('(  =^=  )')
    console.log('(        )')
    console.log('(         )')
    console.log('(          ))))))))))) ')
    console.log('')

    var catDescription = this.cat.getDescription() //Get string of cats information
    console.log(catDescription) //Output text
  }
}

module.exports = CommandLineApp
