
var Game = {
    deltaTime: 0,
    lastFrameTimeMs: 0,
    level: 1,
    player: new GameObj.Player(30, 400, 20),
    
    map: new Maps.Level1(),

    init: function init(){
        this.player.draw();
        this.map.buildMap();
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
      var i = 0;
      this.map.update(deltaTime);

      this.player.moveKey(deltaTime);
      this.player.update(this.map.enemies, this.map.blocks);
    }
}





Game.init();