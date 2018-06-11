var GameObj = {
  Enemy: function(x, y, dirX, dirY, size, speed){
    this.spawn = [x, y,
                  x+size, y,
                  x+size, y+size,
                  x, y+size];
    this.deltaX = 0.0;
    this.deltaY = 0.0;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed= speed;

    this.size = size;
    this.x = this.spawn[0] + this.deltaX;
    this.y = this.spawn[1] + this.deltaY;

    this.draw = function() {
      ctx.beginPath();
      ctx.moveTo(this.spawn[0] + this.deltaX, this.spawn[1] + this.deltaY);
      ctx.lineTo(this.spawn[2] + this.deltaX, this.spawn[3] + this.deltaY);
      ctx.lineTo(this.spawn[4] + this.deltaX, this.spawn[5] + this.deltaY);
      ctx.lineTo(this.spawn[6] + this.deltaX, this.spawn[7] + this.deltaY);
      ctx.closePath();
    
      this.x = this.spawn[0] + this.deltaX;
      this.y = this.spawn[1] + this.deltaY;

      ctx.lineWidth = 5;
      ctx.strokeStyle = "rgba(102, 102, 102, 1)";
      ctx.stroke();
    
      
      ctx.fillStyle = "rgba(183, 3, 69, 1)";
      ctx.fill();
    }

    this.reset = function(){
      this.deltaX= 0;
      this.deltaY= 0;
      this.draw();
    }

    this.update = function(deltaTime, blocks){
      for(i=0; i < blocks.length ; i++){
        if(this.checkColl(blocks[i])){
          if(this.dirX !== 0){
            this.dirX = -this.dirX;
            this.deltaX += this.speed * deltaTime * this.dirX *2;
          }
          if(this.dirY !== 0){
            this.dirY = -this.dirY;
            this.deltaY += this.speed * deltaTime * this.dirY *2;
          }
        }
      }
        this.deltaX += this.speed * deltaTime * this.dirX;
        this.deltaY += this.speed * deltaTime * this.dirY;

      this.draw();
    }

    this.checkColl = function(obstacle){
      return obstacle.x < this.x + this.size &&
      obstacle.x + obstacle.size > this.x &&
      obstacle.y < this.y + this.size &&
      obstacle.y + obstacle.size > this.y;
    }
  },

  Player: function(x,y,size){
    this.spawn = [x, y,
                  x+size, y,
                  x+size, y+size,
                  x, y+size];

    this.deltaX = 0;
    this.deltaY = 0;
    this.speed = 0.2;

    this.size = size;
    this.x = this.spawn[0] + this.deltaX;
    this.y = this.spawn[1] + this.deltaY;

    this.keys = 0;
    this.level = 0;

    this.draw = function() {
      ctx.beginPath();
      ctx.moveTo(this.spawn[0] + this.deltaX, this.spawn[1] + this.deltaY);
      ctx.lineTo(this.spawn[2] + this.deltaX, this.spawn[3] + this.deltaY);
      ctx.lineTo(this.spawn[4] + this.deltaX, this.spawn[5] + this.deltaY);
      ctx.lineTo(this.spawn[6] + this.deltaX, this.spawn[7] + this.deltaY);
      ctx.closePath();

      this.x = this.spawn[0] + this.deltaX;
      this.y = this.spawn[1] + this.deltaY;
      
      ctx.lineWidth = 5;
      ctx.strokeStyle = "rgba(102, 102, 102, 1)";
      ctx.stroke();
      
      ctx.fillStyle = "rgba(0, 214, 103, 1)";
      ctx.fill();
    }

    this.update = function(enemies, blocks, winblock, keyblocks, keysneeded){

      this.moveKey(deltaTime);
      this.click(deltaTime);

      this.draw();

      var i = 0;
      for(i=0; i < enemies.length ; i++){
        if(this.checkColl(enemies[i])){
          this.reset();
          return true;
        }
      }

      for(i=0; i < blocks.length ; i++){
        if(this.checkColl(blocks[i])){
          this.reset();
          return true;
        }
      }

      for(i=0; i < keyblocks.length ; i++){
        if(this.checkColl(keyblocks[i])){
          keyblocks.splice(i,1);
          this.keys++;
        }
      }

      if(this.checkColl(winblock)){
        if(keysneeded === this.keys)
          this.level++;
        else{
          ctx.font = "15px Arial";
          ctx.fillStyle = "black";
          ctx.fillText("Must get all keys!",this.x-45,this.y-10);
        }
      }
    }

    this.reset = function(){
      this.deltaX= 0;
      this.deltaY= 0;
      this.keys = 0;
      this.draw();
    }

    this.newPosition = function(x,y){
      this.spawn = [x, y,
                  x+size, y,
                  x+size, y+size,
                  x, y+size];

      this.deltaX = 0;
      this.deltaY = 0;
      this.speed = 0.2;

      this.x = this.spawn[0] + this.deltaX;
      this.y = this.spawn[1] + this.deltaY;

      this.draw();
    }

    this.moveKey = function(deltaTime) {
      if (keys[37]) {
        if (this.x >= 0) {
          this.deltaX -= deltaTime * this.speed;
        }
        else{
          this.deltaX += deltaTime * this.speed + 0.1;
        }
      }

      if (keys[39]) {
        if (this.x + this.size <= c.width) {
          this.deltaX += deltaTime * this.speed;
        }
        else{
          this.deltaX -= deltaTime * this.speed + 0.1;
        }
      }
      if (keys[40]) {
        if (this.y + this.size <= c.height) {
          this.deltaY += deltaTime * this.speed;
        }
        else{
          this.deltaY -= deltaTime * this.speed + 0.1;
        }
      }
      if (keys[38]) {
        if (this.y >= 0) {
          this.deltaY -= deltaTime * this.speed;
        }
        else{
          this.deltaY += deltaTime * this.speed + 0.1;
        }
      }
    }

    this.click = function(){
      if(mouseDown){
        if(this.x < click[0]-(this.size/2)){
          this.deltaX += deltaTime * this.speed;
        }
        else{
          this.deltaX -= deltaTime * this.speed;
        }
        if(this.y < click[1]-(this.size/2)){
          this.deltaY += deltaTime * this.speed;
        }
        else{
          this.deltaY -= deltaTime * this.speed;
        }
      }
    }

    this.checkColl = function(obstacle){
      return obstacle.x < this.x + this.size &&
      obstacle.x + obstacle.size > this.x &&
      obstacle.y < this.y + this.size &&
      obstacle.y + obstacle.size > this.y;
    }
  },

  WinBlock: function(x,y,size){
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

      this.x = this.spawn[0];
      this.y = this.spawn[1];
      
      ctx.lineWidth = 5;
      ctx.strokeStyle = "rgba(102, 102, 102, 1)";
      ctx.stroke();
      
      ctx.fillStyle = "rgba(28, 79, 160)";
      ctx.fill();
    }
  },

  KeyBlock: function(x,y,size){
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

      this.x = this.spawn[0];
      this.y = this.spawn[1];
      
      ctx.lineWidth = 5;
      ctx.strokeStyle = "rgba(102, 102, 102, 1)";
      ctx.stroke();
      
      ctx.fillStyle = "rgba(198, 198, 29)";
      ctx.fill();
    }
  }
}