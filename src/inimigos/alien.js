class Alien extends Animacao {
  constructor(imagem,matriz, x, y, largura, altura, larguraSprite, alturaSprite,raio,velocity){
    super(imagem,matriz , x, y, largura, altura, larguraSprite, alturaSprite,raio,velocity);
    this.posAlien={};
    //this.millisInicial = millis();
  }
  rotaciona(){
    translate(width/2 , height/0.8);
    translate(p5.Vector.fromAngle(-millis() / this.velocity, this.raio));
    this.posAlien = p5.Vector.fromAngle(-millis() / this.velocity, this.raio);
  }
}