var chai = require('chai') //Include chai for testing
var expect = chai.expect //Declare expect variable to make it easier to write tests

var AdaCat = require('./AdaCat') //Include AdaCat file

//Testing AdaCat class
describe('AdaCat', function() {
  //Tests creation of a cat object
  it('is a class', function() {
    var myCat = new AdaCat('jeff', 'alex')
    expect(myCat).to.be.an.instanceOf(AdaCat)
  })
  //Tests constructor method
  describe('#constructor', function() {
    //Testing name setting of cat object
    it('takes name and sets it as an attribute', function() {
      var myCat = new AdaCat('taffy', 'alex')
      expect(myCat.name).to.equal('taffy')
    })
    //Testing owner setting of cat object
    it('takes owner and sets it as an attribute', function() {
      var myCat = new AdaCat('buttons', 'alex')
      expect(myCat.owner).to.equal('alex')
    })
    //Testing cat is set to 5 hunger on creation
    it('sets the hunger attribute to 5', function() {
      var myCat = new AdaCat('greg', 'alex')
      expect(myCat.hunger).to.equal(5)
    })
    //Testing cat is set to asleep on creation
    it('sets the isSleeping attribute to false', function() {
      var myCat = new AdaCat('denim', 'alex')
      expect(myCat.isSleeping).to.equal(false)
    })
    //Testing cat is set to 30 size on creation
    it('sets the size attribute to 30', function() {
      var myCat = new AdaCat('toyota', 'alex')
      expect(myCat.size).to.equal(30)
    })
  })

  //Testing getDescription method
  describe('#getDescription', function() {
    //Testing first line of description output
    it('includes the name and owner', function() {
      var myCat = new AdaCat('decking', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[0]).to.equal('decking is a cat. they belong to alex.')
    })
    //Testing description line 2 displays hunger
    it('includes the hunger level', function() {
      var myCat = new AdaCat('socks', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[1]).to.equal('their hunger level is 5/10.')
    })
    //Testing description line 5 displays awake when appropriate
    it('tells you if the cat is awake', function() {
      var myCat = new AdaCat('marmite', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[4]).to.equal('marmite is awake.')
    })
    //Testing description line 5 displays asleep when appropriate
    it('tells you if the cat is asleep', function() {
      var myCat = new AdaCat('mc splinters', 'alex')
      myCat.nap()
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[4]).to.equal('Shh! mc splinters is sleeping.')
    })

    //Testing description line 3 displays size
    it('includes the cat size', function() {
      var myCat = new AdaCat('oak', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[2]).to.equal('they weigh 30 tonnes.')
    })

    //Testing description line 4 displays health
    it('includes the health level', function() {
      var myCat = new AdaCat('professor dangle', 'alex')
      var result = myCat.getDescription()
      var lines = result.split('\n')
      expect(lines[3]).to.equal('their health is 25/30.')
    })
  })

  //Testing feed method
  describe('#feed', function() {
    //Tests that hunger reduces when fed
    it('decreases the hunger attribute by 1', function() {
      var myCat = new AdaCat('mittens', 'alex')
      myCat.feed()
      expect(myCat.hunger).to.equal(4)
    })
    //Tests that lower limit works correctly
    it('does not decrease hunger below 0', function() {
      var myCat = new AdaCat('leggy', 'alex')
      myCat.hunger = 0
      myCat.feed()
      expect(myCat.hunger).to.equal(0)
    })
    //Tests for increasing size when cut is less hungry
    it('increases size when hunger is less than three', function() {
      var myCat = new AdaCat('pencil', 'alex')
      myCat.hunger = 2
      myCat.feed()
      expect(myCat.size).to.equal(31)
    })
  })

  //Testing nap method
  describe('#nap', function() {
    //Testing that cat is set to asleep
    it('sets the isSleeping attribute to true', function() {
      var myCat = new AdaCat('apple', 'alex')
      myCat.nap()
      expect(myCat.isSleeping).to.equal(true)
    })
  })

  //Testing wakeUp method
  describe('#wakeUp', function() {
    //Testing that cat is set to awake
    it('sets the isSleeping attribute to false', function() {
      var myCat = new AdaCat('brick', 'alex')
      myCat.isSleeping = true
      myCat.wakeUp()
      expect(myCat.isSleeping).to.equal(false)
    })
  })

  //Testing play method
  describe('#play', function() {
    //Tests that hunger is increased when played with
    it('increases hunger by 3', function() {
      var myCat = new AdaCat('zebra', 'alex')
      myCat.play()
      expect(myCat.hunger).to.equal(8)
    })
    //Tests that upper limit works correctly
    it('will not increase hunger above 10', function() {
      var myCat = new AdaCat('jorts', 'alex')
      myCat.hunger = 9
      myCat.play()
      expect(myCat.hunger).to.equal(10)
    })
    //Tests that cat size reduces when hungry
    it('decreases size when hunger is above 7', function() {
      var myCat = new AdaCat('ada', 'alex')
      myCat.hunger = 8
      myCat.play()
      expect(myCat.size).to.equal(29)
    })
  })

  //Tests getHealth method
  describe('#getHealth', function() {
    //Tests that full health is acheived at optimum size
    it('is 30 when size = 30, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 30
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(30)
    })
    //Tests health reduces when size reduces
    it('is 25 when size = 25, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 25
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(25)
    })
    //Tests health reduces when size increases
    it('is 25 when size = 35, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 35
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(25)
    })
    //Tests health reduces when size reduces
    it('is 5 when size = 5, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 5
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(5)
    })
    //Tests health reduces when size increases
    it('is 5 when size = 55, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 55
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(5)
    })
    //Tests extreme size = lowest health
    it('is 0 when size = 65, hunger = 0', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 65
      myCat.hunger = 0
      var result = myCat.getHealth()
      expect(result).to.equal(0)
    })
    //Tests hunger affects health
    it('is 23 when size = 30, hunger = 7', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 30
      myCat.hunger = 7
      var result = myCat.getHealth()
      expect(result).to.equal(23)
    })
    //Tests health reduces when size reduces and hunger is high
    it('is 18 when size = 25, hunger = 7', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 25
      myCat.hunger = 7
      var result = myCat.getHealth()
      expect(result).to.equal(18)
    })
    //Tests health reduces when size increases and hunger is high
    it('is 18 when size = 35, hunger = 7', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 35
      myCat.hunger = 7
      var result = myCat.getHealth()
      expect(result).to.equal(18)
    })
    //Tests health reduces when size reduces and hunger is included
    it('is 2 when size = 5, hunger = 3', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 5
      myCat.hunger = 3
      var result = myCat.getHealth()
      expect(result).to.equal(2)
    })
    //Tests health reduces when size increases and hunger is included
    it('is 2 when size = 55, hunger = 3', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 55
      myCat.hunger = 3
      var result = myCat.getHealth()
      expect(result).to.equal(2)
    })
    //Tests health is at lowest at small size and with hunger included
    it('is 0 when size = 1, hunger = 3', function() {
      var myCat = new AdaCat('bort', 'alex')
      myCat.size = 1
      myCat.hunger = 3
      var result = myCat.getHealth()
      expect(result).to.equal(0)
    })
  })
})
