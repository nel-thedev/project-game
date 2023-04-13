const game = document.getElementById("game");
const ctx = game.getContext("2d");
let circlesArr = [];
let bpm = 222;
let circleColorBlueOrRed = true; //true = blue, false = red
let playerColorBlueOrRed = true;
game.height = 650;
game.width = 400;
let gameOn = false; //game is running
let paused = false;
let gameOver = false;
let playTime = 60; //in seconds
let isHittingD = false;
let isHittingF = false;
let isHittingJ = false;
let isHittingK = false;

//audio:
let song = new Audio("./sound/audio.mp3");
song.volume = 0.7;
song.currentTime = 23;
let keyPressSound = new Audio("./sound/normal-hitnormal.wav");
keyPressSound.volume = 0.5;
let comboBreak = new Audio("./sound/combobreak.wav");
comboBreak.volume = 1;
let spacePressSound = new Audio("./sound/normal-spacebar.wav");
let applause = new Audio("./sound/applause.wav");
applause.loop = false; //working?

//speed slider:
let speedSlider = document.getElementById("speed-slider");
let speedOutput = document.getElementById("speed-slider-value");
speedOutput.innerHTML = speedSlider.value;
speedSlider.oninput = function () {
  speedOutput.innerHTML = Number(this.value);
};

//Color change slider:
let changeSlider = document.getElementById("change-slider");
let changeOutput = document.getElementById("change-slider-value");
changeOutput.innerHTML = changeSlider.value;
changeSlider.oninput = function () {
  changeOutput.innerHTML = Number(this.value);
};

//counters:
let count300 = 0;
let count100 = 0;
let count50 = 0;
let countMiss = 0;
let combo = 0;
let score = 0;

//html grabby:
let start = document.getElementById("start-btn");
let timer = document.getElementById("timeRem");
let scoreEl = document.getElementById("score");
let hits300El = document.getElementById("hits300");
let hits100El = document.getElementById("hits100");
let hits50El = document.getElementById("hits50");
let missesEl = document.getElementById("misses");

class Circle {
  constructor(x, color) {
    this.x = x;
    this.y = 0;
    this.dia = 50;
    this.color = color;
  }

  updatePos() {
    this.y += 8.8 * speedSlider.value;
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
  let intervalCount = 0;
  setInterval(() => {
    if (intervalCount % 4 === 0) {
      if (Math.random() < changeSlider.value) {
        circleColorBlueOrRed = !circleColorBlueOrRed;
        intervalCount = 0;
      }
    }
    intervalCount++;
    circlesArr.push(new Circle(randomPos(), circleColorBlueOrRed));
  }, 60000 / bpm);
}

function clearCircle() {
  circlesArr.shift();
}

function drawHit(x, text, color) {
  ctx.fillStyle = color;
  ctx.font = "15px 'Azeret Mono'";
  ctx.textAlign = "center";
  ctx.fillText(text, x, 500);
}

function checkCollision(letter, array) {
  //this will check for each letter passed from the keyup whether it hits 300, 100, 50 or misses. Going to be heavily nested but couldnt find any other way at the moment.

  if (letter === "d") {
    array.forEach((element, i, arr) => {
      //50 hit
      if (
        element.x == 50 &&
        ((element.y >= 520 && element.y < 535) ||
          (element.y >= 605 && element.y < 620)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 50 * (combo + 1);
        combo++;
        count50++;
        arr.splice(i, 1);
        keyPressSound.play();
      }

      //100 hit
      if (
        element.x == 50 &&
        ((element.y >= 535 && element.y < 550) ||
          (element.y >= 590 && element.y < 605)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 100 * (combo + 1);
        combo++;
        count100++;
        arr.splice(i, 1);
        keyPressSound.play();
      }

      //300 hit
      if (
        element.x == 50 &&
        element.y >= 550 &&
        element.y < 590 &&
        playerColorBlueOrRed == element.color
      ) {
        score += 300 * (combo + 1);
        combo++;
        count300++;
        arr.splice(i, 1);

        isHittingD = true;
        setTimeout(() => {
          isHittingD = false;
        }, 700);

        keyPressSound.play();
      }
    });
  }

  if (letter === "f") {
    array.forEach((element, i, arr) => {
      //50 hit
      if (
        element.x == 150 &&
        ((element.y >= 520 && element.y < 535) ||
          (element.y >= 605 && element.y < 620)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 50 * (combo + 1);
        combo++;
        count50++;
        arr.splice(i, 1);
        keyPressSound.play();
      }

      //100 hit
      if (
        element.x == 150 &&
        ((element.y >= 535 && element.y < 550) ||
          (element.y >= 590 && element.y < 605)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 100 * (combo + 1);
        combo++;
        count100++;
        arr.splice(i, 1);
        keyPressSound.play();
      }

      //300 hit
      if (
        element.x == 150 &&
        element.y >= 550 &&
        element.y < 590 &&
        playerColorBlueOrRed == element.color
      ) {
        score += 300 * (combo + 1);
        combo++;
        count300++;
        arr.splice(i, 1);
        keyPressSound.play();

        isHittingF = true;
        setTimeout(() => {
          isHittingF = false;
        }, 1000);
      }
    });
  }

  if (letter === "j") {
    array.forEach((element, i, arr) => {
      //50 hit
      if (
        element.x == 250 &&
        ((element.y >= 520 && element.y < 535) ||
          (element.y >= 605 && element.y < 620)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 50 * (combo + 1);
        combo++;
        count50++;
        arr.splice(i, 1);
        keyPressSound.play();
      }

      //100 hit
      if (
        element.x == 250 &&
        ((element.y >= 535 && element.y < 550) ||
          (element.y >= 590 && element.y < 605)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 100 * (combo + 1);
        combo++;
        count100++;
        arr.splice(i, 1);
        keyPressSound.play();
      }

      //300 hit
      if (
        element.x == 250 &&
        element.y >= 550 &&
        element.y < 590 &&
        playerColorBlueOrRed == element.color
      ) {
        score += 300 * (combo + 1);
        combo++;
        count300++;
        arr.splice(i, 1);
        keyPressSound.play();

        isHittingJ = true;
        setTimeout(() => {
          isHittingJ = false;
        }, 1000);
      }
    });
  }

  if (letter === "k") {
    array.forEach((element, i, arr) => {
      //50 hit
      if (
        element.x == 350 &&
        ((element.y >= 520 && element.y < 535) ||
          (element.y >= 605 && element.y < 620)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 50 * (combo + 1);
        combo++;
        count50++;
        arr.splice(i, 1);
        keyPressSound.play();
      }

      //100 hit
      if (
        element.x == 350 &&
        ((element.y >= 535 && element.y < 550) ||
          (element.y >= 590 && element.y < 605)) &&
        playerColorBlueOrRed == element.color
      ) {
        score += 100 * (combo + 1);
        combo++;
        count100++;
        arr.splice(i, 1);
        keyPressSound.play();
      }

      //300 hit
      if (
        element.x == 350 &&
        element.y >= 550 &&
        element.y < 590 &&
        playerColorBlueOrRed == element.color
      ) {
        score += 300 * (combo + 1);
        combo++;
        count300++;
        arr.splice(i, 1);
        keyPressSound.play();

        isHittingK = true;
        setTimeout(() => {
          isHittingK = false;
        }, 1000);
      }
    });
  }
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

function timerFunction(time) {
  let seconds = time;
  let interval = setInterval(() => {
    seconds -= 1;

    timer.innerHTML = `${seconds}`;

    if (seconds <= 10) {
      timer.style.color = "#f00";
      timer.style.fontWeight = 800;
    }

    if (seconds === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 68:
      checkCollision("d", circlesArr);
      break;

    case 70:
      checkCollision("f", circlesArr);
      break;

    case 74:
      checkCollision("j", circlesArr);
      break;

    case 75:
      checkCollision("k", circlesArr);
      break;

    case 32:
      playerColorBlueOrRed = !playerColorBlueOrRed;
      spacePressSound.play();
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

  switch (true) {
    case isHittingD:
      drawHit(50, "Perfect", "#0f0");
      break;
    case isHittingF:
      drawHit(150, "Perfect", "#0f0");
      break;
    case isHittingJ:
      drawHit(250, "Perfect", "#0f0");
      break;
    case isHittingK:
      drawHit(350, "Perfect", "#0f0");
      break;
  }

  //update counters:
  scoreEl.innerHTML = score;
  hits300El.innerHTML = count300;
  hits100El.innerHTML = count100;
  hits50El.innerHTML = count50;
  missesEl.innerHTML = countMiss;

  if (combo > 4) {
    comboDraw();
  }

  //circle drawing from array:
  for (let i = 0; i < circlesArr.length; i++) {
    circlesArr[i].drawCircle();
    circlesArr[i].updatePos();

    if (circlesArr[i].y > game.height + 20) {
      clearCircle();
      if (combo > 10) {
        comboBreak.play();
      }
      combo = 0;
      countMiss++;
    }
  }

  setTimeout(gameOverFn, playTime * 1000);

  if (!gameOver) {
    requestAnimationFrame(animate);
  }
}

function gameOverFn() {
  gameOver = true;

  ctx.clearRect(0, 0, game.width, game.height);

  ctx.fillStyle = "white";
  ctx.font = "20px 'Azeret Mono'";
  ctx.textAlign = "center";

  ctx.fillText("Time is up!", game.width / 2, game.height / 2);
  ctx.fillText("See score on the right.", game.width / 2, game.height / 2 + 30);
  song.pause();
  applause.play();
}

function startGame() {
  console.log("Starting...");
  gameOn = true;
  gameOver = false;
  animate();

  generateCircle();

  song.play();
  timerFunction(playTime);

  //disable button so it doesnt get pressed when game running:
  start.disabled = true;
}

window.onload = () => {
  document.getElementById("start-btn").onclick = () => {
    startGame();
  };
};
