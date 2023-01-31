
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	var chao_options = {
		isStatic: true
	}

	


	fill('rgba(100%,0%,100%,0.5)');
	
	//Crie os Corpos Aqui.
	chao = Bodies.rectangle(0,600,0,0,chao_options);
	World.add(world,chao);
	
	var circulo_options = {
		restitution: 0.50,
		frictionAir:0.05
	}

	var quadrado_options = {
		restitution: 0.75,
		frictionAir:0.09
	}

	var retangulo_options = {
		restitution: 0.32,
		frictionAir:0.01
	}

	circulo = Bodies.circle(100,10,20,circulo_options);
	World.add(world,circulo);

	quadrado = Bodies.rectangle(400,10,40,40,quadrado_options);
	World.add(world,quadrado);
	
	retangulo = Bodies.rectangle(700,10,10,50,retangulo_options);
	World.add(world,retangulo);
  
	rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
	background(57);

	Engine.update(engine);

	rect(chao.position.x,chao.position.y,1600,50);

	ellipse(circulo.position.x,circulo.position.y,40);
	rect(retangulo.position.x,retangulo.position.y,100,60);
	rect(quadrado.position.x,quadrado.position.y,70,70);
  
}



