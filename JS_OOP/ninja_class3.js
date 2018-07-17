// // ES5 way
// function Dot(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Dot.prototype.showLocation = function() {
//     console.log("This Dot is at x " + this.x + " and y " + this.y);
// }
// var dot1 = new Dot(55, 20);
// dot1.showLocation();
// // ES6 way
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// const dot2 = new Dot(5, 13);
// dot2.showLocation();

// // Part I
// // Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):

// // name
// // health
// // speed
// // strength
// // Speed and strength should be 3 by default. Health should be 100 by default.

// // The Ninja class should have the following methods:

// // sayName() - This should log that Ninja's name to the console.
// // showStats() - This should show the Ninja's name, strength, speed, and health.
// // drinkSake() - This should add +10 health to the Ninja

class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My ninja name is ${this.name}`);
    }

    showspeed() {
        console.log(`My speed is ${this.speed}`);
        return this.speed;
    }

    showstrength(){
        console.log(`My strength is ${this.strength}`);
        return this.strength;
    }

    drinkSake(){
        this.health +=10;
        return this;
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
}

const ninja1 = new Ninja("Ninja1");
// ninja1.sayName();
// ninja1.showspeed();
// ninja1.showstrength();
// ninja1.showStats();

console.log("After drinking Sake")
ninja1.drinkSake().showStats();

// 
// parent Dot class
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius) {
//         super(x, y);
//         this.radius = radius;
//     }
// }
// we can now create Circles
// const circle1 = new Circle(33, 33, 33);
// // same attributes as a Dot, plus a radius
// console.log(circle1);
// // and Circles can access Dot methods
// circle1
class Sensei extends Ninja{
    constructor(name,wisdom){
        super(name);//inherits from class Ninja
        this.speed = 10; // default values
        this.strength = 10; 
        this.health = 200;
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log( "What one programmer can do in one month, two programmers can do in two months.");
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`)
       
    }

}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


