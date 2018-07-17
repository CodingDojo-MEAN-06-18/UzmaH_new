//Ninja Class 2
//create a new object Constructor called Ninja
function Ninja(name){
    // to check if it this is a Ninja object (whether "new" was used or not to create the object)
    if (!( this instanceof Ninja)){
        console.log("was not a Ninja object, converting it now")
        return new Ninja(name); 
    }

    //speed and strength are private variables
    var speed = 3; //default values below
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.showspeed = function(){
        return speed;
    }

    this.showstrength = function(){
        return speed ;
    }

    this.showStats=function(){
        console.log(`my Name is ${this.name}`);
        console.log(`my Speed is ${this.showspeed()}`);
        console.log(`my Strength is ${this.showstrength()}`)
        console.log(`my Health is ${this.health}`)
    }
}

Ninja.prototype.drinkSake = function(){
    this.health +=10;
    return this;

}

Ninja.prototype.punch = function(target){
    if (!target){
        throw new Error ("The person to be punched is missing")
    }
    target.health -=5; // the one who got punched lost 5 health
    console.log(`${target.name} was punched by ${this.name} and lost 5 health. Health is now ${target.health}`)
    return this;
}

Ninja.prototype.kick = function(target){
    if (!target || (target === this)){
        throw new Error ("Person to be kicked is missing")}
    target.health -=15;
    console.log(`${target.name} was kicked by ${this.name} and lost 15 health, health is now ${target.health}`)
    return this;
}

var blueNinja = new Ninja('Goeman');
var redNinja = new Ninja('Bill Gates');
redNinja.punch(blueNinja);
// Goeman was punched by Bill Gates and lost 5 Health.
blueNinja.kick(redNinja)

console.log(`${redNinja.name} stats`)
redNinja.showStats(); //stats for redNinja
console.log(`After having Sake, ${redNinja.name} 's Statistics are `)
redNinja.drinkSake().showStats(); //chained because of the return this.