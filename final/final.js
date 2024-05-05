const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
let hoopla = new Audio();
hoopla.src = 'hoopla.mp3';


function randomTime(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('double clicking will not work, silly goose');
      score-= 3;
      scoreBoard.textContent = score;
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(600, 1300);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    volume = .1
    peep();
    setTimeout(() => timeUp = true, 15000)
}

function whack(e) {
    if(!e.isTrusted) return; 
    score+= 10;
    hoopla.play();
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', whack));

function off() {
    document.querySelector('.overlay').style.display = "none";
}

function on() {
    document.querySelector('.overlay').style.display = "block";
    setTimeout(off,34500);
    setTimeout(startGame,35000);
}
  
