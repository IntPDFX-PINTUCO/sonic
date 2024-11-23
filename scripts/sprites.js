

var mountainImages = [ 'imgs/scene/mountains01.png', 'imgs/scene/mountains02.png', 'imgs/scene/mountains03.png', 'imgs/scene/mountains04.png'];
var cloudImages = [ 'imgs/scene/cloud01.png', 'imgs/scene/cloud02.png'];
var brickImages = [ 'imgs/blocks/blocks001.png', 'imgs/blocks/blocks002.png', 'imgs/blocks/blocks003.png'];
var coinsImags = [ 'imgs/blocks/coin01.png', 'imgs/blocks/coin05.png' ];
var pipeImages = [ 'imgs/scene/tube.png' ];
var platformImages = [ 'imgs/scene/platform.png' ];
var enemyMushroomImage = [ 'imgs/enemy/mariquita-sonic0.png','imgs/enemy/mariquita-sonic1.png'];
var enemyAvispaImage = ["imgs/enemy/avispa-sonic0.png","imgs/enemy/avispa-sonic1.png"];

var spriteNumber={
  mountain: 6,
  cloud: 10,
  brick: 5,
  pipe: 5,
  coin: 10,
  enemyMushroom: 1,
  enemyAvispa: 1,

}



// set every sprites configs
function setSprites(){
  setSpriteGroups();
  loadStaticObjects( mountains, mountainImages, spriteNumber.mountain ,1.5, gameConfig.screenX, gameConfig.screenY-35, gameConfig.screenY-35);
  loadStaticObjects( clouds, cloudImages, spriteNumber.cloud, 0, gameConfig.screenX, 20, gameConfig.screenY*0.5 );
  loadStaticObjects( bricks, brickImages, spriteNumber.brick, gameConfig.screenX*0.1, gameConfig.screenX*0.9, gameConfig.screenY*0.1, gameConfig.screenY*0.7 );
  loadStaticObjects( pipes, pipeImages, spriteNumber.pipe, 50, gameConfig.screenX, gameConfig.screenY-20, gameConfig.screenY+10 );
  loadAnimatedObjects( coins, coinsImags, 'shine', spriteNumber.coin, "get", false, 0, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75 );
  loadAnimatedObjects( enemyMushrooms, enemyMushroomImage, 'move', spriteNumber.enemyMushroom, 'live', true, gameConfig.screenX*0.5, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75, 1.0 );
  loadAnimatedObjects(enemyAvispas, enemyAvispaImage, 'move', spriteNumber.enemyAvispa, 'live', true, gameConfig.screenX*0.5, gameConfig.screenX, gameConfig.screenY*0.10, gameConfig.screenY*0.50, 1.0 , true);
  loadPlatforms();
}


//declare sprite groups 
function setSpriteGroups(){
  //groups 
  bricks = new Group();
  enemyMushrooms = new Group();
  enemyAvispas = new Group();
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
    var randomNumber=floor((random()*10)%imageArray.length);
    var img = loadImage(imageArray[randomNumber]);

    group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
    group[i].addImage(img);
    // group[i].scale=scales;
  }
};

//load animate object function
function loadAnimatedObjects( group, imageArray, animationName, spriteNumber, spriteStatusName, spriteStatusValue,  randomPosStartX, randomPosEndX, randomPosStartY, randomPosEndY, tamaño=1.5, volar=0) {
  for(var i = 0; i < spriteNumber; i++) {
    
    group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
    group[i].addAnimation(animationName, imageArray[0], imageArray[1]);
    group[i].scale = tamaño;
    group[i].fly = volar
    group[i][spriteStatusName] = spriteStatusValue;
    
  };
};


// load platforms
function loadPlatforms() {
  img=loadImage('imgs/scene/platform.png');
  for(i=0;i<70;i++){
    randomNumber=random();
    if(randomNumber>0.2){
      platforms[i]=createSprite(gameConfig.screenX-i*19,gameConfig.screenY-10);
    }else{
      platforms[i]=createSprite(random(0,gameConfig.screenX),gameConfig.screenY-10);
    }
    platforms[i].addImage(img);
  };
};



// load Mario animation
function MarioAnimation(){
  mario=createSprite(gameConfig.startingPointX, gameConfig.startingPointY, gameConfig.startingPoint, 0.30);
  mario.addAnimation("stand",'imgs/sonic/sonic00.png');
  mario.addAnimation("run",'imgs/sonic/sonic24.png', "imgs/sonic/sonic25.png","imgs/sonic/sonic26.png","imgs/sonic/sonic27.png");
  mario.addAnimation("run2",'imgs/sonic/sonic28.png', "imgs/sonic/sonic29.png","imgs/sonic/sonic30.png","imgs/sonic/sonic31.png");
  mario.addAnimation("move",'imgs/sonic/sonic18.png','imgs/sonic/sonic19.png',"imgs/sonic/sonic20.png","imgs/sonic/sonic21.png","imgs/sonic/sonic22.png","imgs/sonic/sonic23.png");
  mario.addAnimation("crouch",'imgs/mario/mario18.png');
  mario.addAnimation("jump","imgs/sonic/sonic02.png",'imgs/sonic/sonic03.png',"imgs/sonic/sonic04.png",'imgs/sonic/sonic05.png',"imgs/sonic/sonic06.png",'imgs/sonic/sonic07.png',"imgs/sonic/sonic08.png",'imgs/sonic/sonic09.png','imgs/sonic/sonic10.png',"imgs/sonic/sonic11.png",'imgs/sonic/sonic12.png',"imgs/sonic/sonic13.png",'imgs/sonic/sonic14.png',"imgs/sonic/sonic15.png",'imgs/sonic/sonic16.png');
  mario.addAnimation("dead",'imgs/sonic/sonicmuerte.png');
};





