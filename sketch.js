const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var mercury;
var sun,mercury;

function preload(){
 satrun_img= loadImage("sprites/satrun.jpg");
 mercury_img = loadImage("sprites/mercury.png");
venus_img = loadImage("sprites/venus.png");
 earth_img = loadImage("sprites/earth.png");
mars_img = loadImage("sprites/mars.png");
jupiter_img = loadImage("sprites/jupiter.png");
uranus_img = loadImage("sprites/uranus.png");
neptune_img = loadImage("sprites/neptune.png");
download_img = loadImage("sprites/download.png")
}



function setup(){
    var canvas = createCanvas(1200,520);
    engine = Engine.create();
    world = engine.world;
     sun = new Sun(100,250,500,400);
     mercury = createSprite(300,250);
     mercury.addImage("mercury",mercury_img);
     venus = createSprite(420,380);
     venus.addImage("venus",venus_img);
     earth = createSprite(550,200);
     earth.addImage("earth",earth_img);
     mars = createSprite(650,300);
     mars.addImage("mars",mars_img);
     jupiter = createSprite(780,380);
     jupiter.addImage("jupiter",jupiter_img);
     satrun = createSprite(980,300);
     satrun.addImage("satrun",satrun_img);
    uranus = createSprite(1080,450);
    uranus.addImage("uranus",uranus_img);
     neptune = createSprite(1100,150);
     neptune.addImage("neptune",neptune_img);
}

function draw(){
    background("black");
    Engine.update(engine);

    sun.display();
    drawSprites();
}


