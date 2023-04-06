

const game = document.getElementById('game');
const ctx = game.getContext('2d');
let circlesArr = [];
// let bpm = 0;
let speed = 1;
let colorBlueOrRed = true; //true = blue, false = red



class Circle {
    constructor(position) {
        this.x = randomPos();
        this.y = 0;
        this.dia = 22.5;
    }

    updatePos() {
        this.y += 8.8 * speed;
        //maybe add some way of relating this to bpm, but the circles have to reach the line with the bpm intead of being generated with bpm
    }

    drawCircle() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, (this.dia / 2), 0, Math.PI * 2);

        if (colorBlueOrRed) {
            ctx.fillStyle = "rgb(135,206,250)";
        } else {
            ctx.fillStyle = "rgb(220,20,60)";
        };

        ctx.fill();
        ctx.closePath();
    }
}

function checkCollision(circle){
    if (collides300){
        score += 300;
        count300++;

    } else if (collides100){
        score += 100;
        count100++;

    } else if (collides50){
        score += 50;
        count50++

    } else if (passes the timing window){
        
    }
}

function randomPos() {
    const rnd = Math.random()

    switch (true) {
        case (0 <= rnd < 0.25): {
            return 50;
            break;
        }
        case (0.25 <= rnd < 0.50): {
            return 150;
            break;
        }
        case (0.50 <= rnd < 0.75): {
            return 250;
            break;
        }
        case (0.75 <= rnd <= 1): {
            return 350;
            break;
        }
    }
}

// function appearCircle() {
    
// }