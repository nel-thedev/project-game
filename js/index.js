const game = document.getElementById("game");
const ctx = game.getContext("2d");
let circlesArr = [];
let bpm = 180;
let speed = 1;
let circleColorBlueOrRed = true; //true = blue, false = red
let playerColorBlueOrRed = true;
game.height = 650;
game.width = 400;
let gameOn = false; //game is running

//keys pressed:
dKey = false;
fKey = false;
jKey = false;
kKey = false;

//counters:
let rawScore = 0;
let count300;
let count100;
let count50;
let countMiss;
let combo = 0; //will be put in middle of game screen??
let score = rawScore * combo;

//html grabby:
let scoreEl = document.getElementById("score");
// scoreEl.innerHTML = score; ALREADY PUT IN ANIMATE()

class Circle {
  constructor(x, color) {
    this.x = x; //will call randomPos();
    this.y = 0;
    this.dia = 50;
    this.color = color; //will get from circleColorBlueOrRed;
  }

  updatePos() {
    this.y += 8.8 * speed;
    //maybe add some way of relating this to bpm, but the circles have to reach the line with the bpm intead of being generated with bpm
  }

  drawCircle() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.dia / 2, 0, Math.PI * 2);

    if (circleColorBlueOrRed) {
      ctx.fillStyle = "rgb(135,206,250)";
    } else {
      ctx.fillStyle = "rgb(220,20,60)";
    }

    ctx.fill();
    ctx.closePath();
  }
}

function generateCircle() {
  setInterval(() => {
    circlesArr.push(new Circle(randomPos(), circleColorBlueOrRed));
    console.log("new circle");
    // if (Math.random() > 0.05){
    //   circleColorBlueOrRed = !circleColorBlueOrRed;
    // }
  }, 60000 / bpm);
}

function clearCircle() {

  circlesArr.shift();
  console.log("click!");

}

// function checkCollision(circle){
//     if (collides300 && same color){
//         score += 300;
//         count300++;
//         combo++;
//         clearCircle()

//     } else if (collides100 && same color){
//         score += 100;
//         count100++;
//         combo++;
//         clearCircle()

//     } else if (collides50 && same color){
//         score += 50;
//         count50++;
//         combo++;
//         clearCircle()

//     } else if (passes the timing window || is in timing wnd but diff color){
//         countMiss++;
//         combo = 0;
//         clearCircle()

//     }
// }

function randomPos() {
  const rnd = Math.random();

  switch (true) {
    case 0 <= rnd && rnd < 0.25: {
      return 50;
      break;
    }
    case 0.25 <= rnd && rnd < 0.5: {
      return 150;
      break;
    }
    case 0.5 <= rnd && rnd < 0.75: {
      return 250;
      break;
    }
    case 0.75 <= rnd && rnd <= 1: {
      return 350;
      break;
    }
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 68:
      dKey = true;
      console.log("d pressed");
      break;

    case 70:
      fKey = true;
      console.log("f pressed");
      break;

    case 74:
      jKey = true;
      console.log("j pressed");
      break;

    case 75:
      kKey = true;
      console.log("k pressed");
      break;

    case 32:
      playerColorBlueOrRed = !playerColorBlueOrRed;
      score++; //DELETE
      combo++; //DELETE
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.keyCode) {
    case 68:
      dKey = false;
      console.log("d unpressed");
      break;

    case 70:
      fKey = false;
      console.log("f unpressed");
      break;

    case 74:
      jKey = false;
      console.log("j unpressed");
      break;

    case 75:
      kKey = false;
      console.log("k unpressed");
      break;
  }
});

function timingWindowDraw() {
  // timing window:
  if (playerColorBlueOrRed) {
    ctx.fillStyle = "rgba(135,206,250, 0.1)";
    ctx.fillRect(0, 520, game.width, 100);
    ctx.fillRect(0, 535, game.width, 70);
    ctx.fillRect(0, 550, game.width, 40);
    ctx.fillRect(0, 569, game.width, 1);
  } else {
    ctx.fillStyle = "rgba(220,20,60, 0.1)";
    ctx.fillRect(0, 520, game.width, 100);
    ctx.fillRect(0, 535, game.width, 70);
    ctx.fillRect(0, 550, game.width, 40);
    ctx.fillRect(0, 569, game.width, 1);
  }
}

function comboDraw() {
  ctx.fillStyle = "white";
  ctx.font = "50px 'Azeret Mono'";
  ctx.textAlign = "center";
  ctx.fillText(combo, game.width / 2, game.height / 2);
}

function animate() {
  ctx.clearRect(0, 0, game.width, game.height);

  // timing window:
  timingWindowDraw();
  // if (playerColorBlueOrRed) {
  //     ctx.fillStyle = "rgba(135,206,250, 0.1)";
  //     ctx.fillRect(0,520,game.width,100);
  //     ctx.fillRect(0,535,game.width,70);
  //     ctx.fillRect(0,550,game.width,40);
  //     ctx.fillRect(0,569,game.width,1);
  // } else {
  //     ctx.fillStyle = "rgba(220,20,60, 0.1)";
  //     ctx.fillRect(0,520,game.width,100);
  //     ctx.fillRect(0,535,game.width,70);
  //     ctx.fillRect(0,550,game.width,40);
  //     ctx.fillRect(0,569,game.width,1);
  // };
  // need to draw stuff here

  scoreEl.innerHTML = score; //update score

  if (combo > 4) {
    comboDraw();
  }

  //start button color: NOT WORKING
  // let start = document.getElementById('start-btn')
  // if (!playerColorBlueOrRed){
  //     start.style.backgroundColor = 'rgba(135, 206, 250, 0.5)';
  //     start.style.boxShadow = '20px, -20px, 0, rgba(220, 20, 60, 0.5)';
  // } else {
  //     start.style.backgroundColor = 'rgba(220, 20, 60, 0.5)';
  //     start.style.boxShadow = '20px, -20px, 0, rgba(135, 206, 250, 0.5)';
  // }
  // generateCircle();

  circlesArr.forEach(circle => {
    circle.drawCircle()
    circle.updatePos()
    if (circle.y > game.height) {
      clearCircle();
    }
  });



  requestAnimationFrame(animate);
}

function startGame() {
  animate();
  console.log("Starting...");
  gameOn = true;

  // maybe add an offset kinda delay here idk:
  generateCircle();

  //disable button so it doesnt get pressed when game running:
  let start = document.getElementById("start-btn");
  start.disabled = true;
}

window.onload = () => {
  document.getElementById("start-btn").onclick = () => {
    startGame();
  };
};

// function appearCircle() {

// }
