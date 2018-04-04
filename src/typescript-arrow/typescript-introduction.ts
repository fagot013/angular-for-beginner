
interface LandAnimal {
    run();
}

class Turtle implements LandAnimal {

    name = 'Franklin Second';

    run() {
        console.log('Turtles run slowly ...');

        setTimeout( () => {
            console.log('Hello, my name is ' + this.name);
        })

        /*
        var that = this;
        setTimeout(function(){
            console.log('Hello, my name is ' + that.name);
        }, 2000);
        */
    }
}

const turtle = new Turtle();
turtle.run();