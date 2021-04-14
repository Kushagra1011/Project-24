const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(50,100);
    rubber = new Rubber(900,400,60); 
    stone = new Stone(300,400); 
    iron = new Iron(650,350);

    marble1 = new Marble(400,400,15);
    marble2 = new Marble(420,400,15);
    marble3 = new Marble(440,400,15);
    marble4 = new Marble(460,400,15);
    marble5 = new Marble(480,400,15);
    marble6 = new Marble(400,420,15);
    marble7 = new Marble(420,420,15);
    marble8 = new Marble(440,420,15);
    marble9 = new Marble(460,420,15);
    marble10 = new Marble(480,420,15);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();

    marble1.display();
    marble2.display();
    marble3.display();
    marble4.display();
    marble5.display();
    marble6.display();
    marble7.display();
    marble8.display();
    marble9.display();
    marble10.display();


 
}