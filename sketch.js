var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){

    //SOUND
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,580,200,30);
    block4.shapeColor = "green"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = 3;
    ball.velocityX = 3;
}

function draw() {

    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    //music.play();
    

    //BLOCK 1
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.bounceOff(block1);
        music.stop();
    }


    //BLOCK 2
    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.bounceOff(block1);
        music.stop();
    }


    //BLOCK 3
    if(block3.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.bounceOff(block1);
        music.stop();
    }


    //BLOCK 4
    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
        ball.bounceOff(block1);
        music.stop();
    }

    drawSprites();
}
