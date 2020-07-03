class Personagem extends Animacao{
  constructor(imagem,matriz, x, y, largura, altura, larguraSprite, alturaSprite,raio){
    super(imagem,matriz , x, y, largura, altura, larguraSprite, alturaSprite,raio);
    this.gravity = 3;
    this.jumpSpeed = 0;
    this.baseY = this.y;
    if (this.y > this.baseY) {this.y = this.baseY; }
  }
  jump(){
  if(this.baseY === this.y){
   this.jumpSpeed -= 30;
    jumpSound.play();
  }
  }
  applyGravity(){
  this.y += this.jumpSpeed;
  this.jumpSpeed += this.gravity
  }

}