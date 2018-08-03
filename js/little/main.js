
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
           new Maps.DeafultLevels(map14),
           new Maps.DeafultLevels(map15),
           new Maps.DeafultLevels(map16),
           new Maps.DeafultLevels(map17),
           new Maps.DeafultLevels(map18),
           new Maps.DeafultLevels(map19),
           new Maps.DeafultLevels(map20),
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
      
      Game.phraseGenerator();

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
    },

    phraseGenerator: function phraseGenerator(){
      if(Game.player.deaths % 12 === 0 && Game.player.deaths > 0){
        if(!doNotRepeat){
          var randomValue = Math.floor(((Math.random() * 10)/2));

          if(Game.player.level <= 4){
            mainWelcome.textContent=phrases[0][randomValue];
          }
          else if(Game.player.level > 4 && Game.player.level <= 8){
            mainWelcome.textContent=phrases[1][randomValue];
          }
          else if(Game.player.level > 8 && Game.player.level <= 12){
            mainWelcome.textContent=phrases[2][randomValue];
          }
          else if(Game.player.level > 12 && Game.player.level <= 16){
            mainWelcome.textContent=phrases[3][randomValue];
          }
          else{
            mainWelcome.textContent=phrases[4][randomValue];
          }
          
          doNotRepeat = true;
        }
      }
      else{
        doNotRepeat = false;
      }
    }
}





Game.init();