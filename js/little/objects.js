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
      this.speed= 0.3;
      this.draw();
    }

    this.update = function(deltaTime, player){

      if(this.x + this.size <= c.width && this.x >= 0)
        this.deltaX += this.speed * deltaTime * this.dirX;
      else{
        this.dirX = -this.dirX;
        if(this.deltaX>0)
          this.deltaX -= this.speed + 5;
        else
          this.deltaX += this.speed + 5;
      }

      if(this.y + this.size <= c.height && this.y >= 0)
        this.deltaY += this.speed * deltaTime * this.dirY;
      else{
        this.dirY = -this.dirY;
        if(this.deltaY > 0)
          this.deltaY -= this.speed;
        else
          this.deltaY += this.speed;
      }
      
      if(this.checkColl(player))
        console.log("collision");

      this.draw();
    }

    this.checkColl = function(player){
      return player.x < this.x + this.size &&
         player.x + player.size > this.x &&
         player.y < this.y + this.size &&
         player.y + player.size > this.y;
    }
  },

  Player: function(x,y,size){
    this.spawn = [x, y,
                  x+size, y,
                  x+size, y+size,
                  x, y+size];

    this.deltaX = 0;
    this.deltaY = 0;
    this.speed = 0.3;

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

      
      ctx.fillStyle = "rgba(0, 214, 103, 1)";
      ctx.fill();
    }

    this.reset = function(){
      this.deltaX= 0;
      this.deltaY= 0;
      this.speed= 0.3;
      this.draw();
    }

    this.moveKey = function(deltaTime) {
      if (keys[37]) {
        if (this.spawn[0] + this.deltaX >= 0) {
          this.deltaX -= deltaTime * this.speed;
        }else{
          this.deltaX += 0.5 * deltaTime;
        }
      }

      if (keys[39]) {
        if (this.spawn[0] + this.deltaX <= c.width - (this.spawn[2]-this.spawn[0])) {
          this.deltaX += deltaTime * this.speed;
        }else{
          this.deltaX -= 0.5 * deltaTime;
        }
      }
      if (keys[40]) {
        if (this.spawn[3] + this.deltaY <= c.height - (this.spawn[4]-this.spawn[0])) {
          this.deltaY += deltaTime * this.speed;
        }else{
          this.deltaY -= 0.5 * deltaTime;
        }
      }
      if (keys[38]) {
        if (this.spawn[1] + this.deltaY >= 0) {
          this.deltaY -= deltaTime * this.speed;
        }else{
          this.deltaY += 0.5 * deltaTime;
        }
      }
    }
  }
}

//test this when implementing collision
function collides(a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}