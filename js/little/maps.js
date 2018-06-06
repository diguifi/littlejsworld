var map1 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,4,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,5,0,1,1],
            [1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map2 = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0,0,0,0,3,0,0,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1],
            [1,0,0,0,1,1,0,2,0,0,0,1,0,0,0,0,2,0,1,1,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,3,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,1,1,1,0,0,2,0,1,1],
            [1,0,4,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,5,0,0,0,0,0,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

var map3 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

var Maps = {
    Player:  new GameObj.Player(-25, -25, 20),

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
        this.enemies = [];
        this.winblock = {};
        this.map = map1;

        this.buildMap = function(){
            var i = 0;
            var j = 0;
            var b = 0;
            var c = 0;
            
            for(i=0; i < 26; i++){
                for(j=0; j < 20; j++){
                    if(this.map[j][i]==1){
                        this.blocks.push(new Maps.Block(i*this.blockSize, j*this.blockSize, this.blockSize));
                        this.blocks[b].draw();
                        b++;
                    }
                    else if(this.map[j][i]==2){
                        this.enemies.push(new GameObj.Enemy(i*this.blockSize, j*this.blockSize, 1, 0, 20, 0.1));
                        this.enemies[c].draw();
                        c++;
                    }
                    else if(this.map[j][i]==3){
                        this.enemies.push(new GameObj.Enemy(i*this.blockSize, j*this.blockSize, 0, 1, 20, 0.1));
                        this.enemies[c].draw();
                        c++;
                    }
                    else if(this.map[j][i]==4){
                        Maps.Player.newPosition(i*this.blockSize, j*this.blockSize, 20);
                    }
                    else if(this.map[j][i]==5){
                        this.winblock = new GameObj.WinBlock(i*this.blockSize, j*this.blockSize, 20);
                        this.winblock.draw();
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
                    if(this.map[j][i]==1){
                        this.blocks[b].draw();
                        b++;
                    }
                }
            }

            for(x=0; x < this.enemies.length ; x++){
                this.enemies[x].update(deltaTime, this.blocks);
            }

            Maps.Player.moveKey(deltaTime);
            Maps.Player.update(this.enemies, this.blocks, this.winblock);

            this.winblock.draw();
        }
    },

    Level2: function(){
        this.blockSize = 25;
        this.blocks = [];
        this.enemies = [];
        this.winblock = {};
        this.map = map2;

        this.buildMap = function(){
            var i = 0;
            var j = 0;
            var b = 0;
            var c = 0;
            
            for(i=0; i < 26; i++){
                for(j=0; j < 20; j++){
                    if(this.map[j][i]==1){
                        this.blocks.push(new Maps.Block(i*this.blockSize, j*this.blockSize, this.blockSize));
                        this.blocks[b].draw();
                        b++;
                    }
                    else if(this.map[j][i]==2){
                        this.enemies.push(new GameObj.Enemy(i*this.blockSize, j*this.blockSize, 1, 0, 20, 0.1));
                        this.enemies[c].draw();
                        c++;
                    }
                    else if(this.map[j][i]==3){
                        this.enemies.push(new GameObj.Enemy(i*this.blockSize, j*this.blockSize, 0, 1, 20, 0.1));
                        this.enemies[c].draw();
                        c++;
                    }
                    else if(this.map[j][i]==4){
                        Maps.Player.newPosition(i*this.blockSize, j*this.blockSize, 20);
                    }
                    else if(this.map[j][i]==5){
                        this.winblock = new GameObj.WinBlock(i*this.blockSize, j*this.blockSize, 20);
                        this.winblock.draw();
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
                    if(this.map[j][i]==1){
                        this.blocks[b].draw();
                        b++;
                    }
                }
            }

            for(x=0; x < this.enemies.length ; x++){
                this.enemies[x].update(deltaTime, this.blocks);
            }

            Maps.Player.moveKey(deltaTime);
            Maps.Player.update(this.enemies, this.blocks, this.winblock);

            this.winblock.draw();
        }
    },

    Level3: function(){
        this.blockSize = 25;
        this.blocks = [];
        this.enemies = [];
        this.winblock = {};
        this.map = map3;

        this.buildMap = function(){
            var i = 0;
            var j = 0;
            var b = 0;
            var c = 0;
            
            for(i=0; i < 26; i++){
                for(j=0; j < 20; j++){
                    if(this.map[j][i]==1){
                        this.blocks.push(new Maps.Block(i*this.blockSize, j*this.blockSize, this.blockSize));
                        this.blocks[b].draw();
                        b++;
                    }
                    else if(this.map[j][i]==2){
                        this.enemies.push(new GameObj.Enemy(i*this.blockSize, j*this.blockSize, 1, 0, 20, 0.1));
                        this.enemies[c].draw();
                        c++;
                    }
                    else if(this.map[j][i]==3){
                        this.enemies.push(new GameObj.Enemy(i*this.blockSize, j*this.blockSize, 0, 1, 20, 0.1));
                        this.enemies[c].draw();
                        c++;
                    }
                    else if(this.map[j][i]==4){
                        Maps.Player.newPosition(i*this.blockSize, j*this.blockSize, 20);
                    }
                    else if(this.map[j][i]==5){
                        this.winblock = new GameObj.WinBlock(i*this.blockSize, j*this.blockSize, 20);
                        this.winblock.draw();
                    }
                }
            }
        }

        this.update = function(deltaTime){
            // var i = 0;
            // var j = 0;
            // var b = 0;
            // var x = 0;
            
            // for(i=0; i < 26; i++){
            //     for(j=0; j < 20; j++){
            //         if(this.map[j][i]==1){
            //             this.blocks[b].draw();
            //             b++;
            //         }
            //     }
            // }

            // for(x=0; x < this.enemies.length ; x++){
            //     this.enemies[x].update(deltaTime, this.blocks);
            // }

            // Maps.Player.moveKey(deltaTime);
            // Maps.Player.update(this.enemies, this.blocks, this.winblock);

            // this.winblock.draw();
            ctx.fillStyle = "#462ecc";
            ctx.strokeText("More maps coming soon!", 100, 205);
        }
    }
}