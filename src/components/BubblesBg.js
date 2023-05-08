import React, {useEffect, useRef} from 'react'

export default function BubblesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    // generate random number
    function random(min, max) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      // prevent balls from standing still
      if (num === 0) {
        return random(min, max);
      }
      return num;
    }
  
    // generate random color for balls
    function randomRGBA() {
      return `rgba(0,0,${random(10, 70)}, .18)`;
    }
  
    class Ball {
      constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
      }
      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }
      update() {
        if ((this.x + this.size) >= width) {
          this.velX = -(this.velX);
        }
        if ((this.x - this.size) <= 0) {
          this.velX = -(this.velX);
        }
        if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
        }
        if ((this.y - this.size) <= 0) {
          this.velY = -(this.velY);
        }
      
        this.x += this.velX;
        this.y += this.velY;
      } 
    }
    
    const balls = [];
    
    let amount;
    if (width < 700) {
      // for small screen
      amount = 5;
    } else {
      amount = 8;
    }
    while (balls.length < amount) {
      const size = random(60, 120);
      const ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(size, width - size),
        random(size, height - size),
        random(-1, 1),
        random(-1, 1),
        randomRGBA(),
        size
      );
    
      balls.push(ball);
    }
    
    function loop() {
      let grd = ctx.createLinearGradient(width/2, 0, width/2, height);
      grd.addColorStop(0, "hsl(235, 30%, 18%)");
      grd.addColorStop(1, "hsl(228, 35%, 34%)");
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, width, height);
    
      for (const ball of balls) {
        ball.draw();
        ball.update();
      }
    
      requestAnimationFrame(loop);
    }
    loop();
  }, [])


  return (
    <canvas ref={canvasRef} />
  )
}