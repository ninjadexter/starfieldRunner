let astronautaImg;
let planetImg;
let starfieldImg;
let alienImg;
var velocPlanet = 4;
var velocStarfield = 0.3;

let personagem;
const matrizAstronauta = [
  [0, 0],    [84, 0],    [171, 0],
  [0, 124],  [86, 124],  [171, 124],
  [0, 247],  [86, 247],  [171, 247]
                         ];
let astronautaX = 0;
let astronautaY = 0;
let astronautaLargura = 59;
let astronautaAltura = 93;
let astronautaSpriteLargura = 85;
let astronautaSpriteAltura = 123;
let raioAstronauta= 0;

let inimigo;
let areaCount = false;
let inimigoFora= false;
let quantIni=1;
let countIni=0;
const matrizAlien = [  
  [0, 0],    [200, 0],    [400, 0],
  [0, 200],  [200, 200],  [400, 200],
  [0, 400],  [200, 400],  [400, 400]
  ];
let alienX = 0;
let alienY = 0;
let alienLargura = 60;
let alienAltura = 60;
let largSpriteAlien = 200;
let altSpriteAlien = 200;
let raioAlien = 290;
var velocidadeAlien = 2500;
let alienCollision= false;

function preload() {
  astronautaImg = loadImage("assets/astronauta/astronauta-running.png");
  planetImg = loadImage("assets/planet.png");
  starfieldImg = loadImage("assets/starfield.jpg");
  alienImg = loadImage("assets/alien.png");
  musica = loadSound("assets/music/8bitmusic.ogg");
  jumpSound = loadSound("assets/sounds/jump.mp3");
}

function setup() {
  //createCanvas(500, 400);
    createCanvas(320*1.2, 500*1.2);
    jumpSound.setVolume(0.1);
    musica.setVolume(0.2);
    musica.loop();
    imageMode(CENTER);
    frameRate(15);
    score = new Score()
    planeta = new Planeta(planetImg); 
    starfield = new Planeta(starfieldImg);
    planeta.angle = 0;
    starfield.angle = 0;
    astronautaX = width/2.2;
    astronautaY = height/1.29;
    alien = new Alien(alienImg, matrizAlien, alienX, alienY, alienLargura, alienAltura, largSpriteAlien, altSpriteAlien,raioAlien,velocidadeAlien);
      alien2 = new Alien(alienImg, matrizAlien, alienX, alienY, alienLargura, alienAltura, largSpriteAlien, altSpriteAlien,raioAlien,velocidadeAlien);
      alien3 = new Alien(alienImg, matrizAlien, alienX, alienY, alienLargura, alienAltura, largSpriteAlien, altSpriteAlien,raioAlien,velocidadeAlien);
    astronauta = new Personagem(astronautaImg, matrizAstronauta, astronautaX, astronautaY,astronautaLargura,astronautaAltura,astronautaSpriteLargura,astronautaSpriteAltura,raioAstronauta);
}
function draw() {
  planeta.angle += velocPlanet;
  starfield.angle += velocStarfield;
  background(0);
  push();
    starfield.rotateStarfield();
    starfield.showStarfield();
  pop();
  push();
    planeta.rotatePlanet();
    planeta.showPlanet();
  pop();
  score.exibe()
  score.adicionarPonto()
  astronauta.show();
  astronauta.applyGravity();
  if (astronauta.y > astronauta.baseY) {
    astronauta.y = astronauta.baseY; 
    astronauta.jumpSpeed=0;
  } 
  if(!inimigoFora){
    push();
    alien.rotaciona();
    alien.show(); 
    pop();
  }else if(inimigoFora){ //verificar  <<--------------
    inimigoFora = false;
    alien.velocity = random(1500,2000);
    if(score.pontos > 100){ alien.velocity = random(1000,1800); }
    if(score.pontos > 180){ alien.velocity = random(600,1000); }
    else if(score.pontos > 500){alien.velocity = random(500,700);}
    alien.rotaciona();
    alien.show();
  }
  countAlien();
  checkCollisionAlien();
  if(alienCollision){
    noLoop(); 
    musica.pause();
    alert("Recarregue a pagina, ainda preciso implementar o reset !");
  }
}

function keyPressed(){
  if(key === " " && !alienCollision){
    astronauta.jump();  
  }
}

function touchStarted() {
  if(!alienCollision){
    astronauta.jump();  
  } else if(alienCollision){
    musica.loop();
    score.pontos = 0;
    loop();
  }
}


function checkCollisionAlien(){
  //se Y_superior do alien estiver acima do Y_inferior do astronauta 
  //se X_atras do alien estiver acim do X_frente do astronauta
  // substrai ou soma por astronauta.largura*0.3 e astronauta.altura*0.3 pra considerar somente a imagem.
  if((alien.posAlien.y-alien.altura/2)+height/0.8 <= astronauta.y+astronauta.altura/2 && (alien.posAlien.x-alien.largura/2)+width/2 <= astronauta.x+astronauta.largura/2-astronauta.largura*0.3){   
      if((alien.posAlien.y-alien.altura/2)+height/0.8 <= astronauta.y+astronauta.altura/2-astronauta.altura*0.3 && (alien.posAlien.x+alien.largura/2-alien.largura*0.1)+width/2 >= astronauta.x-astronauta.largura/2+astronauta.largura*0.3){
        alienCollision = true;
     }else {alienCollision = false;}
  }
}
//Gera randomicamente quantidade de aliens para exibir
//Posiciona em distancias diferentes para gerar atraso;
//
function countAlien(){
    if(alien.posAlien.y+height/0.8 >= height && alien.posAlien.y+height/0.8 <= height+30 && alien.posAlien.x+width/2 < width/2 && !inimigoFora && !areaCount){
      areaCount = true;
      if(countIni < quantIni){
        countIni++;
        if(countIni === quantIni){
          inimigoFora = true;
          areaCount = false;
          countIni = 0;
          quantIni = int(random(1,3.99)); 
        }
      }
    }else if(alien.posAlien.y+height/0.8 >= height+30 && alien.posAlien.y+height/0.8 <= height+60 && alien.posAlien.x+width/2 < width/2 && !inimigoFora && areaCount){
    areaCount = false;
    }
}

  

