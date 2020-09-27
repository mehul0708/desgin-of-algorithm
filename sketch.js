var movinig,fixed





function setup() {
  createCanvas(800,400);
  movinig=createSprite(400, 200, 50, 50);
  fixed=createSprite(300,220,50,50)
  movinig.shapeColor="blue"
  fixed.shapeColor="blue"
  movinig.debug=true
  fixed.debug=true
}

function draw() {
  background(255,255,255);  
movinig.x=mouseX
movinig.y=mouseY
if (movinig.x-fixed.x<movinig.width/2+fixed.width/2
  &&fixed.x-movinig.x<movinig.width/2+fixed.width/2
  &&movinig.y-fixed.y<movinig.width/2+fixed.width/2
  &&fixed.y-movinig.y<movinig.width/2+fixed.width/2){
    movinig.shapeColor="red"
  fixed.shapeColor="red"
  }
  else{
    movinig.shapeColor="blue"
  fixed.shapeColor="blue"
  }
  drawSprites();
}