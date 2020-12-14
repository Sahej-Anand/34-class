const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var g,ball,rope,building1;
var engine, world;
function preload(){

}
function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    g= new Ground(250, 10,500, 20);
    building1 = new Building (100,200,20,40);
    ball = new Ball(100,100,40,40);
    rope = new Rope(ball.body, {x:200 , y: 300});
    
}
function draw(){
    background(0);
    Engine.update(engine);
    g.display();
    building1.display();
    ball.display();
    rope.display();
}