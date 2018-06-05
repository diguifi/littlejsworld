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
        
        // will be remade into an easier method (file reading)
        this.buildMap = function(){
            var i = 0;
            var j = 0;

            for(i=0; i <= 25; i++){
                this.blocks.push(new Maps.Block(i*this.blockSize, 0, this.blockSize));
                this.blocks[i+j].draw();
                if(i==5){
                    for(j=0; j<=10; j++){
                        this.blocks.push(new Maps.Block(i*this.blockSize, j*this.blockSize, this.blockSize));
                        this.blocks[i+j].draw();
                    }
                }
            }
        }

        this.update = function(){
            var i = 0;
            var j = 0;

            for(i=0; i <= 25; i++){
                this.blocks[i+j].draw();
                if(i==5){
                    for(j=0; j<=10; j++){
                        this.blocks[i+j].draw();
                    }
                }
            }
        }
    }
}