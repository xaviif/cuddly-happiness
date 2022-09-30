class Particle {
  constructor(parent, cords, style){
    this.parent = parent;
    this.cords = cords;
    this.style = style;
    this.lifetime = 2000+(Math.random()*4000);
    this.particle = document.createElement('span');
    $(this.particle).addClass("particle")
    $(this.particle).css({
      left: this.cords.x,
      top: this.cords.y,
      width: `${this.style.size}px`,
      height: `${this.style.size}px`,
      background: `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    })
  }
}

Particle.prototype.display = function() {
  $(this.parent).append(this.particle);
  $(this.particle).animate({
    top: '100vh',
    left: `${this.cords.x - (-150 + Math.random()*250)}`,
    opacity: '0'
    
  }, this.lifetime)
}

Particle.prototype.delete = function() {
  $(this.particle).remove();
}