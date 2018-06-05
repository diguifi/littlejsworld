var map1 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var Maps = {
    Block: function(x,y,size){
        this.spawn = [x, y,
          x+size, y,
          x+size, y+size,
          x, y+size];
    
        this.size = size;
        this.x = this.spawn[0];
        this.y = this.spawn[1];
    
        this.draw = function() {
          ctx.beginPath();
          ctx.moveTo(this.spawn[0], this.spawn[1]);
          ctx.lineTo(this.spawn[2], this.spawn[3]);
          ctx.lineTo(this.spawn[4], this.spawn[5]);
          ctx.lineTo(this.spawn[6], this.spawn[7]);
          ctx.closePath();
    
          ctx.fillStyle = "rgba(102, 102, 102, 1)";
          ctx.fill();
        }
    },
    
    Level1: function(){
        this.blockSize = 25;
        this.blocks = [];
        this.enemies = [new GameObj.Enemy(450, 300, 1, 0, 20, 0.1), new GameObj.Enemy(100, 200, 0, 1, 20, 0.1)];

        this.buildMap = function(){
            var i = 0;
            var j = 0;
            var b = 0;
            
            for(i=0; i < 26; i++){
                for(j=0; j < 20; j++){
                    if(map1[j][i]==1){
                        this.blocks.push(new Maps.Block(i*this.blockSize, j*this.blockSize, this.blockSize));
                        this.blocks[b].draw();
                        b++;
                    }
                }
            }
        }

        this.update = function(deltaTime){
            var i = 0;
            var j = 0;
            var b = 0;
            var x = 0;
            
            for(i=0; i < 26; i++){
                for(j=0; j < 20; j++){
                    if(map1[j][i]==1){
                        this.blocks[b].draw();
                        b++;
                    }
                }
            }

            for(x=0; x < this.enemies.length ; x++){
                this.enemies[x].update(deltaTime, this.blocks);
            }
        }
    }
}