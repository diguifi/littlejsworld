var Player = {
    spawn: [15, 400,
            50, 400,
            50, 435,
            15, 435],

    deltaX:0,
    deltaY:0,
    speed: 0.3,

    draw: function drawPlayer(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.spawn[0] + this.deltaX, this.spawn[1] + this.deltaY);
        ctx.lineTo(this.spawn[2] + this.deltaX, this.spawn[3] + this.deltaY);
        ctx.lineTo(this.spawn[4] + this.deltaX, this.spawn[5] + this.deltaY);
        ctx.lineTo(this.spawn[6] + this.deltaX, this.spawn[7] + this.deltaY);
        ctx.closePath();
      
        
        ctx.lineWidth = 10;
        ctx.strokeStyle = "rgba(102, 102, 102, 1)";
        ctx.stroke();
      
        
        ctx.fillStyle = "rgba(0, 214, 103, 1)";
        ctx.fill();
    },

    reset: function reset(){
      this.deltaX= 0;
      this.deltaY= 0;
      this.speed= 0.3;
      this.draw(ctx);
    },

    moveKey: function whatKey(deltaTime) {
        if (keys[37]) {
          if (this.spawn[0] + this.deltaX >= 0) {
            this.deltaX -= deltaTime * this.speed;
          }else{
            this.deltaX += 0.5 * deltaTime;
          }
        }
      
        if (keys[39]) {
          if (this.spawn[0] + this.deltaX <= c.width - (this.spawn[2]-this.spawn[0])) {
            this.deltaX += deltaTime * this.speed;;
          }else{
            this.deltaX -= 0.5 * deltaTime;
          }
        }
        if (keys[40]) {
          if (this.spawn[3] + this.deltaY <= c.height - (this.spawn[4]-this.spawn[0])) {
            this.deltaY += deltaTime * this.speed;;
          }else{
            this.deltaY -= 0.5 * deltaTime;
          }
        }
        if (keys[38]) {
          if (this.spawn[1] + this.deltaY >= 0) {
            this.deltaY -= deltaTime * this.speed;;
          }else{
            this.deltaY += 0.5 * deltaTime;
          }
        }
    }
}