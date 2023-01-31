
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao, circulo, quadrado, retangulo;
var engine, world;

function setup() {
	
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//fill('rgba(100%,0%,100%,0.5)');
	
	//Crie os Corpos Aqui.
	circulo = Bodies.circle(100, 10, 35, { restitution: 0.50, frictionAir:0.05 });
	World.add(world,circulo);

	quadrado = Bodies.rectangle(400, 10, 40, 55, { restitution: 0.75, frictionAir:0.09 });
	World.add(world,quadrado);
	
	retangulo = Bodies.rectangle(700, 10, 10, 50, { restitution: 0.32, frictionAir:0.01 });
	World.add(world,retangulo);

	chao = Bodies.rectangle(0, 600, 1600, 60, { isStatic: true });
	World.add(world,chao);
  
	rectMode(CENTER);
  	ellipseMode(RADIUS);
}


function draw() {
	background(57);

	Engine.update(engine);

	
	ellipse(circulo.position.x, circulo.position.y, 40);
	rect(quadrado.position.x, quadrado.position.y, 70, 70);
	rect(retangulo.position.x, retangulo.position.y, 100, 60);
	
	rect(chao.position.x, chao.position.y, 1600, 50);
}



