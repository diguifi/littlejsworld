
var Game = {
    context: ctx,
    deltaTime: 0,
    lastFrameTimeMs: 0,
    player: Player,

    init: function init(){
        this.player.draw(ctx);
        requestAnimationFrame(Game.mainLoop);
    },

    reset: function reset(){
        this.player.reset();
        this.deltaTime = 0;
        this.lastFrameTimeMs = 0;
    },

    mainLoop: function mainLoop(timestamp){
      this.deltaTime = timestamp - this.lastFrameTimeMs; // get the delta time since last frame
      this.lastFrameTimeMs = timestamp;
  
      Game.update(this.deltaTime);
  
      requestAnimationFrame(Game.mainLoop);
    },
  
    update: function update(deltaTime){
  
      this.player.moveKey(deltaTime);
  
      ctx.clearRect(0, 0, c.width, c.height);
      this.player.draw(ctx);
  
    }
}





Game.init();