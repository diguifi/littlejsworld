
var Game = {
    deltaTime: 0,
    lastFrameTimeMs: 0,
    level: 1,
    player: new GameObj.Player(20,400,30),
    enemies: [new GameObj.Enemy(10,300,30,0.1)],

    init: function init(){
        this.player.draw();
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
      if(isNaN(this.deltaTime))
        this.deltaTime = 0;

      ctx.clearRect(0, 0, c.width, c.height);
      Game.update(this.deltaTime);
  
      requestAnimationFrame(Game.mainLoop);
    },
  
    update: function update(deltaTime){
  
      this.player.moveKey(deltaTime);
  
      this.player.draw(ctx);
      this.enemies[0].update(deltaTime);
  
    }
}





Game.init();