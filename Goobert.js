'use strict'
class goobert {
    constructor(name) {
        this.name = name,
        this.antihunger = 0, // Eating, catch the food game
        this.swagosity = 50, // Boredom, Snake
        this.snooziness = 50, // Sleeping
        this.cleanliness = 50, // Bathing, Flappy Goobert
        this.asset = '', //What the goobert looks like
        this.xLocation = 0, //Where the goobert is
        this.yLocation = 0
    }
    sleep() {
        this.snooziness = 100;
        console.log(this);
    }
    eat() {
        this.antihunger >= 100 ? 100 : this.antihunger += 10;
        console.log(this);
    }
    bathe(){

    }
}

const david = new goobert('david');

console.log(david);






