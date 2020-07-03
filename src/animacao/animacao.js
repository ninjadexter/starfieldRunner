class Animacao {
  constructor(imagem, matriz, x, y, largura, altura, larguraSprite, alturaSprite,raio,velocity){
    this.imagem = imagem;
    this.matriz = matriz;
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.raio = raio;
    this.frame = 0;
    this.velocity = velocity;
  }
  show(){
      image(this.imagem, this.x , this.y , this.largura, this.altura ,          this.matriz[this.frame][0], this.matriz[this.frame][1] , 
this.larguraSprite, this.alturaSprite);
this.playAnimation();
  }
  playAnimation(){
    this.frame++
  
  //Loop animação
    if(this.frame >= this.matriz.length - 1 ){
      this.frame=0;
    }
}
}