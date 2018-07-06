
var Game = {
    deltaTime: 0,
    lastFrameTimeMs: 0,
    level: 0,
    player:  Maps.Player,
    maps: [new Maps.MainMenu(),
           new Maps.DeafultLevels(map1),
           new Maps.DeafultLevels(map2), 
           new Maps.DeafultLevels(map3), 
           new Maps.DeafultLevels(map4),
           new Maps.DeafultLevels(map5),
           new Maps.DeafultLevels(map6),
           new Maps.DeafultLevels(map7),
           new Maps.DeafultLevels(map8),
           new Maps.DeafultLevels(map9),
           new Maps.DeafultLevels(map10),
           new Maps.DeafultLevels(map11),
           new Maps.DeafultLevels(map12),
           new Maps.DeafultLevels(map13),
           new Maps.More()],

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
      this.deltaTime = timestamp - this.lastFrameTimeMs;
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