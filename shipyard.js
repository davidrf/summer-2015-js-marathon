var launchpad = function(ship){
  console.log('Goodnight, moon!');
  console.log(ship.name);
  console.log("The captain is", ship.captain().name);
  ship.mountPropulsion(rocket);
  ship.fuelShip(9999);
  countDown(10, ship);

}
var ship = {
  name: "indecisive",
  crew: [],
  propulsion: null,
  loadCrew: function(crewMembers){
    var that = this;
    crewMembers.forEach(function(crewMember){
      that.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship.");
    })
  },
  captain: function(){
    var number = this.crew.length;
    var random_number = Math.floor(Math.random() * number);
    return this.crew[random_number];
  },
  mountPropulsion: function(engine){
    this.propulsion = engine;
    console.log("Engines were mounted");
  },
  takeoff: function() {
    if(this.propulsion.fire()) {
      console.log("wooooooossshhhhhh");
    } else {
      console.log("crickets");
    }
  },
  fuelShip: function(fuelUnits){
    this.propulsion.fuel += fuelUnits
    console.log(fuelUnits + " fuel units was/were added");
  }
};

var crewNames = ["Hannah", "Hillary", "D-Rod", "Kristin", "Sharon", "Jimmy", "Jesse", "Mike", "Dante"];

var trainCrew = function(arr) {
  return arr.map(function(name){
    return {name: name};
  });
};

var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel -= 1;
      console.log("The engine has been fired");
      console.log("Fuel level " + this.fuel);
      return true;
    }
    else {
      console.log("The engine failed to fire");
      return false;
    }
  }
}

var countDown = function(i, ship) {
  if (i === 0) {
    console.log ('blastoff');
    ship.takeoff();
  }else {
    console.log (i)
    i--;
    setTimeout(function() {countDown(i, ship)}, 1000);
  }
}


var crewMembers = trainCrew(crewNames);
ship.loadCrew(crewMembers);
launchpad(ship);
