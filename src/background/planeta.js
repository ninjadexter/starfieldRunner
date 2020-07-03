class Planeta {
  constructor(imagem,angle){ 
  this.imagem = imagem;
  this.angle = angle;
  }
  showPlanet(){
  image(this.imagem,0,0,500,500,0,0,400,400);
  }
  rotatePlanet(){
    translate(width/2 , height/0.8);
    rotate(-PI / 180 * this.angle); //para inverso colocar em -PI
  }
  showStarfield(){
  image(this.imagem,0,0,584*2.4,450*2.4,0,0,584,450);
  }
  rotateStarfield(){
    translate(width/2 , height/0.8);
    rotate(-PI / 180 * this.angle); //para inverso colocar em -PI
  }
  
}
