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
let count300;
let count100;
let count50;
let countMiss;
let combo = 0;
let score = 0;

//html grabby:
let scoreEl = document.getElementById("score");

class Circle {
  constructor(x, color) {
    this.x = x;
    this.y = 0;
    this.dia = 50;
    this.color = color; //will get from circleColorBlueOrRed; PENDING!!!!
  }

  updatePos() {
    this.y += 8.8 * speed;
    //maybe add some way of relating this to bpm, but the circles have to reach the line with the bpm intead of being generated with bpm
  }

  drawCircle() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.dia / 2, 0, Math.PI * 2);

    if (this.color) {
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
    if (Math.random() < 0.2) {
      circleColorBlueOrRed = !circleColorBlueOrRed;
    }

    circlesArr.push(new Circle(randomPos(), circleColorBlueOrRed));
    // console.log("new circle");
  }, 60000 / bpm);
}

function clearCircle() {
  circlesArr.shift();
  // console.log("click!");
}

function checkCollision(letter, array) {
  //this will check for each letter passed from the keyup whether it hits 300, 100, 50 or misses. Going to be heavily nested but couldnt find any other way at the moment.

  if (letter === 'd') {
    array.forEach((element, i, arr) => {
      //50 hit
      if (
        element.x == 50 &&
        ((element.y >= 520 && element.y < 535) ||
          (element.y >= 605 && element.y < 620)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 50 * (combo + 1)
        combo++
        count50++
        console.log("50 HIT")
        arr.splice(i, 1)
      }

      //100 hit
      if (
        element.x == 50 &&
        ((element.y >= 535 && element.y < 550) ||
          (element.y >= 590 && element.y < 605)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 100 * (combo + 1)
        combo++
        count100++
        console.log("100 HIT")
        arr.splice(i, 1)
      }

      //300 hit
      if (
        element.x == 50 &&
        element.y >= 550 && element.y < 590 &&
        playerColorBlueOrRed == element.color
      ) {
        score += 300 * (combo + 1)
        combo++;
        count300++;
        console.log("300 HIT")
        arr.splice(i, 1)
      }
    })
  }

  if (letter === 'f') {
    array.forEach((element, i, arr) => {
      //50 hit
      if (
        element.x == 150 &&
        ((element.y >= 520 && element.y < 535) ||
          (element.y >= 605 && element.y < 620)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 50 * (combo + 1)
        combo++
        count50++
        console.log("50 HIT")
        arr.splice(i, 1)
      }

      //100 hit
      if (
        element.x == 150 &&
        ((element.y >= 535 && element.y < 550) ||
          (element.y >= 590 && element.y < 605)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 100 * (combo + 1)
        combo++
        count100++
        console.log("100 HIT")
        arr.splice(i, 1)
      }

      //300 hit
      if (
        element.x == 150 &&
        element.y >= 550 && element.y < 590 &&
        playerColorBlueOrRed == element.color
      ) {
        score += 300 * (combo + 1)
        combo++
        count300++
        console.log("300 HIT")
        arr.splice(i, 1)
      }

    })
  }

  if (letter === 'j') {
    array.forEach((element, i, arr) => {
      //50 hit
      if (
        element.x == 250 &&
        ((element.y >= 520 && element.y < 535) ||
          (element.y >= 605 && element.y < 620)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 50 * (combo + 1)
        combo++
        count50++
        console.log("50 HIT")
        arr.splice(i, 1)
      }

      //100 hit
      if (
        element.x == 250 &&
        ((element.y >= 535 && element.y < 550) ||
          (element.y >= 590 && element.y < 605)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 100 * (combo + 1)
        combo++
        count100++
        console.log("100 HIT")
        arr.splice(i, 1)
      }

      //300 hit
      if (
        element.x == 250 &&
        element.y >= 550 && element.y < 590 &&
        playerColorBlueOrRed == element.color
      ) {
        score += 300 * (combo + 1)
        combo++
        count300++
        console.log("300 HIT")
        arr.splice(i, 1)
      }

    })
  }

  if (letter === 'k') {
    array.forEach((element, i, arr) => {
      //50 hit
      if (
        element.x == 350 &&
        ((element.y >= 520 && element.y < 535) ||
          (element.y >= 605 && element.y < 620)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 50 * (combo + 1)
        combo++
        count50++
        console.log("50 HIT")
        arr.splice(i, 1)
      }

      //100 hit
      if (
        element.x == 350 &&
        ((element.y >= 535 && element.y < 550) ||
          (element.y >= 590 && element.y < 605)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 100 * (combo + 1)
        combo++
        count100++
        console.log("100 HIT")
        arr.splice(i, 1)
      }

      //300 hit
      if (
        element.x == 350 &&
        element.y >= 550 && element.y < 590 &&
        playerColorBlueOrRed == element.color
      ) {
        score += 300 * (combo + 1)
        combo++
        count300++
        console.log("300 HIT")
        arr.splice(i, 1)
      }

    })
  }

  // } else if (collides100 && same color){
  //     score += 100 * combo;
  //     count100++;
  //     combo++;
  //     clearCircle()

  // } else if (collides50 && same color){
  //     score += 50 * combo;
  //     count50++;
  //     combo++;
  //     clearCircle()

  // } else if (passes the timing window || is in timing wnd but diff color){
  //     countMiss++;
  //     combo = 0;
  //     clearCircle()

  // }
}

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
    // case 68:
    //   // dKey = true;
    //   console.log("d pressed");
    //   break;

    // case 70:
    //   // fKey = true;
    //   console.log("f pressed");
    //   break;

    // case 74:
    //   // jKey = true;
    //   console.log("j pressed");
    //   break;

    // case 75:
    //   // kKey = true;
    //   console.log("k pressed");
    //   break;

    case 32:
      playerColorBlueOrRed = !playerColorBlueOrRed;
      // score++; //DELETE
      // combo++; //DELETE
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.keyCode) {
    case 68:
      // dKey = false;
      checkCollision("d", circlesArr);
      console.log("d unpressed");
      break;

    case 70:
      // fKey = false;
      checkCollision("f", circlesArr);
      console.log("f unpressed");
      break;

    case 74:
      // jKey = false;
      checkCollision("j", circlesArr);
      console.log("j unpressed");
      break;

    case 75:
      // kKey = false;
      checkCollision("k", circlesArr);
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

  timingWindowDraw();

  // need to draw stuff here

  //update score:
  scoreEl.innerHTML = score;

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

  //circle drawing from array:
  for (let i = 0; i < circlesArr.length; i++) {
    circlesArr[i].drawCircle();
    circlesArr[i].updatePos();

    if (circlesArr[i].y > game.height + 20) {
      //condition to be changed to checkCollision()
      clearCircle();
      combo = 0;
      countMiss++;
    }
    checkCollision(circlesArr[i]);
  }

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
