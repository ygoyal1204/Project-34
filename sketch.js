const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup(){
    createCanvas(windowWidth/2, windowHeight/1.5);

    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options ={
        mouse: canvasmouse
    };

    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    console.log(width, height);

    pendulum1 = new Pendulum (width/2-120, height/2+200, "purple");
    pendulum2 = new Pendulum (width/2-60, height/2+200, "purple");
    pendulum3 = new Pendulum (width/2, height/2+200, "purple");
    pendulum4 = new Pendulum (width/2+60, height/2+200, "purple");
    pendulum5 = new Pendulum (width/2+120, height/2+200, "purple");
 
    sling1 = new Sling (pendulum1.body, {x: width/2-120, y: height/2-100});
    sling2 = new Sling (pendulum2.body, {x: width/2-60, y: height/2-100});
    sling3 = new Sling (pendulum3.body, {x: width/2, y: height/2-100});
    sling4 = new Sling (pendulum4.body, {x: width/2+60, y: height/2-100});
    sling5 = new Sling (pendulum5.body, {x: width/2+120, y: height/2-100});
}

function draw(){
    rectMode(CENTER);
    background(0);

    textAlign(CENTER);
    textSize(30);
    fill("yellow");
    text("NEWTON'S CRADLE", width/2, 50);
    textSize(22);
    fill("lightgreen");
    text("Drag the left-most pendulum to see how it works!", width/2, 90);
    textSize(28);
    fill("lightblue");
    text("HAVE FUN!", width/2, height-50);

    Engine.update(engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}