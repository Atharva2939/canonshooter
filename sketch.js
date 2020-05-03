// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine, world;
var ground;
var tank;
var ball1;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground=new Ground(400,390,1200,20)
    tank=new Tanker(400,100,100,100)
    tank1=new Tanker(420,50,150,20)
    ball1=new Ball(600,250,20)
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
    Engine.update(engine);
    ground.display();
    tank.display();
    tank1.display();
    ball1.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}