
var Game = {
    deltaTime: 0,
    lastFrameTimeMs: 0,
    level: 0,
    player:  Maps.Player,
    maps: [new Maps.Level1(), new Maps.Level2(), new Maps.Level3()],

    init: function init(){
        Game.mapBuilder();
        requestAnimationFrame(Game.mainLoop);
    },

    mapBuilder: function build(){
      this.maps[this.level].buildMap();
    },

    reset: function reset(){
        this.maps[this.level].reset();
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
      this.maps[this.level].update(deltaTime);
      
      if(this.level != this.player.level){
        this.level = this.player.level;
        Game.mapBuilder();
      }
    }
}





Game.init();