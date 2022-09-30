class Engine{
  constructor(){
    this.particleNum = 9;
  }
  
  static createPop(parent, num, loc){
    let style={
      size: 9
    }
    for(let i in Array.apply(null, Array(num))){
      let particle = new Particle(parent, loc, style);
      particle.display();
      
      setTimeout(()=>{
        particle.delete();
      }, particle.lifetime)
  
    }
  }
}

Engine.prototype.listenClick = function(parent){
  
  $(document).click(function(e){
    let loc = {
      x: e.pageX,
      y: e.pageY
    }
    Engine.createPop($(parent), 3, loc);
  })
}