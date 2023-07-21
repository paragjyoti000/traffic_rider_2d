var animation;
let score = 0;
let hiScore = localStorage.getItem("hiScore");
if (hiScore > 0) {
  gHiScore.innerHTML = "Hi-Score : " + hiScore;
} else {
  gHiScore.innerHTML = "Hi-Score : " + 0;
}

const bgSound = new Audio("music/bg.wav");
const bikeSound = new Audio("music/bike.mp3");
const blastSound = new Audio("music/blust.wav");
const changingSound = new Audio("music/changing.wav");
const vehicleSound = new Audio("music/vehicle.wav");

let vehicles = [
  "assets/police.png",
  "assets/truck.png",
  "assets/car_blue.png",
  "assets/bus.png",
  "assets/car_white.png",
];

const ranDom = (a, b) => {
  let c = Math.round(a + (b - a) * Math.random());
  return c;
};

// const cancelAnimationFrame =
//   window.cancelAnimationFrame || window.mozCancelAnimationFrame;

start.onclick = () => {
  starting.style.display = "none";
  road.classList.add("animateRoad");
  grassLeft.classList.add("animateRoad");
  grassRight.classList.add("animateRoad");

  bgSound.play();
  bgSound.currentTime = 0;

  bikeSound.play();
  bikeSound.currentTime = 0;

  vehicleSound.play();
  animation = requestAnimationFrame(move);
  window.requestAnimationFrame(main);
};

restart.onclick = () => {
  starting.style.display = "none";
  crash.style.display = "none";
  blast.style.display = "none";
  road.classList.add("animateRoad");
  grassLeft.classList.add("animateRoad");
  grassRight.classList.add("animateRoad");

  bikeSound.play();
  bikeSound.currentTime = 0;

  vehicleSound.play();

  blastSound.pause();
  animation = requestAnimationFrame(move);
  window.requestAnimationFrame(main);
  score = 0;
  hiScore = localStorage.getItem("hiScore");
  if (hiScore > 0) {
    gHiScore.innerHTML = "Hi-Score : " + hiScore;
  } else {
    gHiScore.innerHTML = "Hi-Score : " + 0;
  }
};

window.addEventListener("keyup", (e) => {
  if (e.key === "m") {
  }
});

let fps = 5;
let lastPaintTime = 0;

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / fps) {
    return;
  }
  lastPaintTime = ctime;

  hiScore = localStorage.getItem("hiScore");

  fScore.innerHTML = score;
  hScore.innerHTML = hiScore;

  gameEngine();
}

let bottom = 100;
let i = 0;

function gameEngine() {
  // console.log("gameEngine");
  i += 1;

  let bx = parseInt(window.getComputedStyle(cRider).gridColumn);
  let by = parseInt(window.getComputedStyle(rider).bottom);
  let bh = parseInt(window.getComputedStyle(rider).height);

  // console.log(bx);
  // console.log(bh);

  let o1y = parseInt(window.getComputedStyle(obj1).bottom);
  let o2y = parseInt(window.getComputedStyle(obj2).bottom);
  let o3y = parseInt(window.getComputedStyle(obj3).bottom);
  let o4y = parseInt(window.getComputedStyle(obj4).bottom);

  switch (bx) {
    case 1:
      if (o1y - by < bh && o1y > by) {
        cancelAnimationFrame(animation);
        road.classList.remove("animateRoad");
        grassLeft.classList.remove("animateRoad");
        grassRight.classList.remove("animateRoad");
        blast.style.display = "block";
        crash.style.display = "block";
        blastSound.play();
        bikeSound.pause();
        vehicleSound.pause();
        return;
      }
      break;
    case 2:
      if (o2y - by < bh && o2y > by) {
        cancelAnimationFrame(animation);
        road.classList.remove("animateRoad");
        grassLeft.classList.remove("animateRoad");
        grassRight.classList.remove("animateRoad");
        blast.style.display = "block";
        crash.style.display = "block";
        blastSound.play();
        bikeSound.pause();
        vehicleSound.pause();
        return;
      }
      break;
    case 3:
      if (o3y - by < bh && o3y > by) {
        cancelAnimationFrame(animation);
        road.classList.remove("animateRoad");
        grassLeft.classList.remove("animateRoad");
        grassRight.classList.remove("animateRoad");
        blast.style.display = "block";
        crash.style.display = "block";
        blastSound.play();
        bikeSound.pause();
        vehicleSound.pause();
        return;
      }
      break;
    case 4:
      if (o4y - by < bh && o4y > by) {
        cancelAnimationFrame(animation);
        road.classList.remove("animateRoad");
        grassLeft.classList.remove("animateRoad");
        grassRight.classList.remove("animateRoad");
        blast.style.display = "block";
        crash.style.display = "block";
        blastSound.play();
        bikeSound.pause();
        vehicleSound.pause();
        return;
      }
      break;
    default:
      break;
  }

  // console.log("gameEngine");
}

let speed = 1;
let r1, r2, r3, r4;
function move(ctime) {
  // var time = Math.round(new Date().getTime() / (10 / speed)) % 600;
  var time = Math.round(ctime / (10 / speed)) % 600;

  if (Math.floor(time / 5) === 100) {
    obj1.setAttribute("src", vehicles[ranDom(0, 4)]);
    obj2.setAttribute("src", vehicles[ranDom(0, 4)]);
    obj3.setAttribute("src", vehicles[ranDom(0, 4)]);
    obj4.setAttribute("src", vehicles[ranDom(0, 4)]);
    r1 = ranDom(2, 6);
    r2 = ranDom(2, 6);
    r3 = ranDom(2, 6);
    r4 = ranDom(2, 6);
    // r1 = ranDom(-10, -30);
    // r2 = ranDom(-1, -10);
    // r3 = ranDom(-5, -20);
    // r4 = ranDom(-20, -40);
    vehicleSound.play();

    score += 1;
  }

  // console.log(Math.floor(time / 5));
  if (i > 18) {
    obj1.style.top = time / r1 + "vh";
    obj2.style.top = time / r2 + "vh";
    obj3.style.top = time / r3 + "vh";
    obj4.style.top = time / r4 + "vh";
    // console.log(time / 5);

    // obj1.style.top = r1 + "vh";
    // obj2.style.top = r2 + "vh";
    // obj3.style.top = r3 + "vh";
    // obj4.style.top = r4 + "vh";

    // r1 += 0.5;
    // r2 += 0.5;
    // r3 += 0.5;
    // r4 += 0.5;
  }

  gScore.innerHTML = "Score : " + score;
  if (score > hiScore) {
    localStorage.setItem("hiScore", score);
  }

  animation = requestAnimationFrame(move);
}

window.addEventListener("keyup", (e) => {
  if (e.key === "spacebar") {
    cancelAnimationFrame(animation);
  }
});

let grid = 2;
window.addEventListener("keyup", (e) => {
  // console.log(e.key);
  switch (e.key) {
    case "d":
      if (grid === 4) {
        return;
      } else {
        grid += 1;
        cRider.style.gridColumn = grid;
        changingSound.play();
      }
      break;
    case "ArrowRight":
      if (grid === 4) {
        return;
      } else {
        grid += 1;
        cRider.style.gridColumn = grid;
        changingSound.play();
      }
      break;
    case "a":
      if (grid === 1) {
        return;
      } else {
        grid -= 1;
        cRider.style.gridColumn = grid;
        changingSound.play();
      }
      break;
    case "ArrowLeft":
      if (grid === 1) {
        return;
      } else {
        grid -= 1;
        cRider.style.gridColumn = grid;
        changingSound.play();
      }
      break;
  }
});

function goRight() {
  if (grid === 4) {
    return;
  } else {
    grid += 1;
    cRider.style.gridColumn = grid;
    changingSound.play();
  }
}

function goLeft() {
  if (grid === 1) {
    return;
  } else {
    grid -= 1;
    cRider.style.gridColumn = grid;
    changingSound.play();
  }
}

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  pConLeft.style.display = "block";
  pConRight.style.display = "block";
}

// if(navigator.userAgent.match(/iPad/i)){
//   //code for iPad here
//  }
