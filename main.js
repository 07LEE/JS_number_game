// 

let computerNum = 0;
let chances = 5;
let gameOver = false;

let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area")

let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value="";
})

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
    chances = 5;
}

function reset() {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "결과값이 여기 나옵니다";
    chanceArea.textContent = `남은 기회 : ${chances}`;
    gameOver = false;
    playButton.disabled = false;
    history = [];
};

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1~100 사이의 숫자를 입력하세요";
        return;
    };

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다";
        return;
    };

    chances--;
    chanceArea.textContent = `남은 기회 : ${chances}`;

    if (userValue < computerNum) {
        resultArea.textContent = "Up";
    }
    else if (userValue > computerNum) {
        resultArea.textContent = "Down";
    }
    else {
        resultArea.textContent = "Good";
        gameOver = true;
    }

    history.push(userValue);

    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

pickRandomNum();