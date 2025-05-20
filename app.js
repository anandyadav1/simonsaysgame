//  // JavaScript to format the date as DD/MM/YYYY
//  const currentDate = new Date();
//  const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero
//  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
//  const year = currentDate.getFullYear();
//  const formattedDate = `${day}/${month}/${year}`;
//  document.getElementById('current-date').textContent = formattedDate;

// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");


// document.addEventListener("keypress", function () {
//     if (started == false) {
//         console.log("Game is start");
//         started = true;

//         levelUp();
//     }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 300);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function () {
//         btn.classList.remove("userflash");
//     }, 250);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx) {
//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function () {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
//         reset();
//     }
// }

// function btnPress() {
//     let btn = this;
//     userFlash(btn);

//     let userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns(userSeq.length - 1); // Fixed typo here
// }

// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }


// let currentHighScore = 0;

// function updateHighScore(level) {
//   if (level > currentHighScore) {
//     currentHighScore = level;
//     console.log("New high score: " + currentHighScore);
//   } else {
//     console.log("Current high score: " + currentHighScore);
//   }
// }


const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;
document.getElementById('current-date').textContent = formattedDate;

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Start the game on keypress (for desktop)
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is start");
        started = true;
        levelUp();
    }
});

// Add start button event listener (for mobile)
document.getElementById("start-btn").addEventListener("click", function () {
    if (!started) {
        console.log("Game is start");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1); // Fixed typo here
}

// Handle both click and touch events for mobile devices
function handleButtonPress(e) {
    let btn = e.target;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1); // Fixed typo here
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", handleButtonPress);
    btn.addEventListener("touchstart", handleButtonPress); // Add touch event for mobile
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let currentHighScore = 0;

function updateHighScore(level) {
    if (level > currentHighScore) {
        currentHighScore = level;
        console.log("New high score: " + currentHighScore);
    } else {
        console.log("Current high score: " + currentHighScore);
    }
}
