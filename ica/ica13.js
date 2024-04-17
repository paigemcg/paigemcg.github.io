// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


function loop(){
    ctx.fillStyle = "rgb(0 0 0 / 50%)";
    ctx.fillRect(0,0, width, height);

    for (const ball of balls){
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);

}

class Ball {
    constructor(x, y, velX, velY, color, size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update(){
        //this.x = this.x + this.velX;
       // this.y = this.y + this.velY;
       if ((this.x + this.size) >= width){
            this.velX = -(this.velX);
       }

       if ((this.x + this.size) <= 0){
            this.velX = -(this.velX);
       }

       if ((this.y + this.size) >= height){
            this.velY = -(this.velY);
       }

       if ((this.y + this.size) <= 0){
            this.velY = -(this.velY);
       }

       this.x += this.velX;
       this.y += this.velY;
    }

    collisionDetect(){
        for (const ball of balls){
            if (this != ball){
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx * dy * dy)

                if (distance < this.size + ball.size){
                        this.velX = -(this.velX);
                    
                        this.velY = -(this.velY);
                    
                }
  
                //if (distance < this.size + ball.size){
        
                    //this.velX = random(-10,10)
                    //ball.velX = this.velX = random(-10,10);
                    //ball.velY = this.velY = random(-10,10);
                    //ball.color = this.color = randomRGB;
                   // if ((this.x + this.size) = collide){
                        //this.velX = -(this.velX);
                //   }
            
            
                 //  if ((this.y + this.size) >= collide){
                       // this.velY = -(this.velY);
                 //  }
            
                   //this.x += this.velX;
                   //this.y += this.velY
                //}
            }
        }
    }
}

const balls = [];

while (balls.length < 15){
    const size = random(1,20);
    const ball = new Ball (
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-10,10),
        random(-10,10),
        randomRGB(),
        size,

    );

    balls.push(ball);
}


loop();
