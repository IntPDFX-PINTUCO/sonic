

var mountainImages = [ 'imgs/scene/mountains01.png', 'imgs/scene/mountains02.png', 'imgs/scene/mountains03.png', 'imgs/scene/mountains04.png'];
var cloudImages = [ 'imgs/scene/cloud01.png', 'imgs/scene/cloud02.png'];
var brickImages = [ 'imgs/blocks/blocks001.png', 'imgs/blocks/blocks002.png', 'imgs/blocks/blocks003.png'];
var coinsImags = [ 'imgs/blocks/ring0.png', 'imgs/blocks/ring1.png', 'imgs/blocks/ring2.png', 'imgs/blocks/ring3.png', 'imgs/blocks/ring4.png', 'imgs/blocks/ring5.png','imgs/blocks/ring6.png', 'imgs/blocks/ring7.png' ];
var pipeImages = [ 'imgs/scene/tube.png' ];
var platformImages = [ 'imgs/scene/piso.png' ];
var enemyMushroomImage = [ 'imgs/enemy/mariquita-sonic0.png','imgs/enemy/mariquita-sonic1.png'];
var enemyCaracolImage = ["imgs/enemy/caracol sonic0.png", "imgs/enemy/caracol sonic1.png","imgs/enemy/caracol sonic2.png"];
var enemyGusanoImage = ["imgs/enemy/gusano00.png","imgs/enemy/gusano01.png","imgs/enemy/gusano02.png","imgs/enemy/gusano03.png","imgs/enemy/gusano04.png","imgs/enemy/gusano05.png","imgs/enemy/gusano06.png","imgs/enemy/gusano07.png","imgs/enemy/gusano08.png","imgs/enemy/gusano09.png","imgs/enemy/gusano10.png","imgs/enemy/gusano11.png"];
var enemyAvispaImage = ["imgs/enemy/avispa-sonic0.png","imgs/enemy/avispa-sonic1.png"];
var fondoCompleto = ["imgs/scene/fondo-completo.png"]

var spriteNumber={
  mountain: 2,
  paisaje: 3,
  cloud: 0,
  brick: 3,
  pipe: 1,
  coin: 6,
  enemyMushroom: 1,
  enemyAvispa: 1,
  enemyCaracol: 1,
  enemyGusano: 1,

}



// set every sprites configs
function setSprites(){
  setSpriteGroups();
  loadStaticObjects( paisajes, fondoCompleto, spriteNumber.paisaje ,0, gameConfig.screenX, 156, gameConfig.screenY);
  loadStaticObjects( mountains, mountainImages, spriteNumber.mountain ,1.5, gameConfig.screenX, gameConfig.screenY-35, gameConfig.screenY-35);
  loadStaticObjects( clouds, cloudImages, spriteNumber.cloud, 0, gameConfig.screenX, 20, gameConfig.screenY*0.5 );
  loadStaticObjects( bricks, brickImages, spriteNumber.brick, gameConfig.screenX*0.1, gameConfig.screenX*0.9, gameConfig.screenY*0.1, gameConfig.screenY*0.7 );
  loadStaticObjects( pipes, pipeImages, spriteNumber.pipe, 50, gameConfig.screenX, gameConfig.screenY-20, gameConfig.screenY+10 );
  loadAnimatedObjects( coins, coinsImags, 'shine', spriteNumber.coin, "get", false, 0, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75, 0.06);
  loadAnimatedObjects( enemyMushrooms, enemyMushroomImage, 'move', spriteNumber.enemyMushroom, 'live', true, gameConfig.screenX*0.5, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75, 1.0, 17);
  loadAnimatedObjects(enemyAvispas, enemyAvispaImage, 'move', spriteNumber.enemyAvispa, 'live', true, gameConfig.screenX*0.5, gameConfig.screenX, gameConfig.screenY*0.10, gameConfig.screenY*0.50, 1.0 , 2,true);
  loadAnimatedObjects( enemyGusano, enemyGusanoImage, 'move', spriteNumber.enemyGusano, 'live', true, gameConfig.screenX*0.9, gameConfig.screenX*1.5, gameConfig.screenY*0.8, gameConfig.screenY*0.8, 1.0, 5);
  loadAnimatedObjects( enemyCaracoles, enemyCaracolImage, 'move', spriteNumber.enemyCaracol, 'live', true, gameConfig.screenX*0.8, gameConfig.screenX*1.2, gameConfig.screenY*0.35, gameConfig.screenY*0.75, 1.0, 6 );
  loadPlatforms();
}


//declare sprite groups 
function setSpriteGroups(){
  //groups 
  bricks = new Group();
  paisajes = new Group();
  enemyMushrooms = new Group();
  enemyAvispas = new Group();
  enemyGusano = new Group();
  enemyCaracoles = new Group();
  clouds = new Group();
  mountains = new Group();
  pipes = new Group();
  platforms = new Group();
  coins = new Group();
};


//load static object function
function loadStaticObjects( group, imageArray, spriteNumber, randomPosStartX, randomPosEndX, randomPosStartY, randomPosEndY) {
  for(var i = 0; i < spriteNumber; i++) {
    // load random image in image array
    if(group==paisajes){
      var img=loadImage(imageArray[0])
      group[i] = createSprite(i*1792*1.6, 156);
      group[i].addImage(img)
      group[i].scale= 1.61
    }
    else{
      var randomNumber=floor((random()*10)%imageArray.length);
      var img = loadImage(imageArray[randomNumber]);
      group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
      group[i].addImage(img);
    }
    // group[i].scale=scales;
  }
};

//load animate object function
function loadAnimatedObjects( group, imageArray, animationName, spriteNumber, spriteStatusName, spriteStatusValue,  randomPosStartX, randomPosEndX, randomPosStartY, randomPosEndY, tamaño=1.5,  delay=4,volar=false) {
  for(var i = 0; i < spriteNumber; i++) {
    
    group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
    group[i].addAnimation(animationName, ...imageArray);
    group[i].scale = tamaño;
    group[i].fly = volar
    group[i].animation.frameDelay=delay
    group[i][spriteStatusName] = spriteStatusValue;
    
  };
};


// load platforms
function loadPlatforms() {
  img=loadImage('imgs/scene/piso.png');
  for(i=0;i<ceil(gameConfig.screenX/96)+3;i++){
      platforms[i]=createSprite(i*96,gameConfig.screenY-10);
    platforms[i].addImage(img);
    platforms[i].scale=1.1
  };
};



// load Mario animation
function MarioAnimation(){
  mario=createSprite(gameConfig.startingPointX, gameConfig.startingPointY, gameConfig.startingPoint, 0.30);
  mario.addAnimation("stand",'imgs/sonic/sonic00.png');
  mario.addAnimation("run",'imgs/sonic/sonic24.png', "imgs/sonic/sonic25.png","imgs/sonic/sonic26.png","imgs/sonic/sonic27.png");
  mario.addAnimation("run2",'imgs/sonic/sonic28.png', "imgs/sonic/sonic29.png","imgs/sonic/sonic30.png","imgs/sonic/sonic31.png");
  mario.addAnimation("move",'imgs/sonic/sonic18.png','imgs/sonic/sonic19.png',"imgs/sonic/sonic20.png","imgs/sonic/sonic21.png","imgs/sonic/sonic22.png","imgs/sonic/sonic23.png");
  mario.addAnimation("crouch",'imgs/sonic/sonic03.png');
  mario.addAnimation("jump","imgs/sonic/sonic02.png",'imgs/sonic/sonic03.png',"imgs/sonic/sonic04.png",'imgs/sonic/sonic05.png',"imgs/sonic/sonic06.png",'imgs/sonic/sonic07.png',"imgs/sonic/sonic08.png",'imgs/sonic/sonic09.png','imgs/sonic/sonic10.png',"imgs/sonic/sonic11.png",'imgs/sonic/sonic12.png',"imgs/sonic/sonic13.png",'imgs/sonic/sonic14.png',"imgs/sonic/sonic15.png",'imgs/sonic/sonic16.png');
  mario.addAnimation("dead",'imgs/sonic/sonicmuerte.png');
  mario.running=false
};





