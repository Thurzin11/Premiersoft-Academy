const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".now-score");
const jumpMario = new Audio("./assets/mario-jump-sound-effect.mp3");
const morteMario = new Audio("./assets/super-mario-death-sound-effect-CUTTED.mp3");

const jump = () => {
    mario.classList.add("jump");
    jumpMario.play();
    setTimeout(() => {
        mario.classList.remove("jump");
  }, 500);
};

document.addEventListener("keydown", jump);

const loop = setInterval(() => {
  const marioPosition = window.getComputedStyle(mario);
  const pipePosition = +pipe.offsetLeft;
  const marioBottom = +marioPosition.bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioBottom < 110) {
    morteMario.play();
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioBottom}px`;

    mario.src = "./assets/game-over.png";
    mario.style.width = "75px";
    mario.style.left = "50px";

    // clouds.style.animation = "none";
    clouds.style.right = clouds.style.right;
    
    gameOver.style.display = "flex";
    clearInterval(loop);
  }
}, 10);
