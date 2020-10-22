"use strict";

const field = document.querySelector(".field");
const carrotField = document.querySelector(".carrot_field");
const carrot = document.querySelectorAll(".carrot");
const bug = document.querySelectorAll(".bug");
const btn = document.querySelector("button");
const timeText = document.querySelector(".time span");
const countText = document.querySelector(".count span");
const replayBtn = document.querySelector(".replay");
let widthCordS;
let widthCordE;
let heightCordS;
let heightCordE;
let flag = false; // 처음 시작시 게임상태 false (timer활용하려면 중요)
let timer;
let count = 10;
let timeCount = 10;
let timeCountText;
let clickThis;
let eventCheck = false; //이벤트 체크 (중복 방지)
const endBg = document.querySelector(".game_end_bg");
const stateText = document.querySelector(".state_text");
const lostText = "you lost!";
const winText = "you win!😆";
const overText = "time over...";

//carrot.style.left = `${widthValue}px`;
//carrot.style.top = `${heightValue - carrotHeight}px`;

// 랜덤좌표 생성을 위한 함수
function getRandom(min, max) {
  const value = Math.floor(Math.random() * (max - min) + min);
  return value;
}

// resize 대비해서 newCord안에 변수 할당
function newCord(ele) {
  widthCordS = Math.floor(field.getBoundingClientRect().x);
  widthCordE = Math.floor(field.getBoundingClientRect().width);
  heightCordS = Math.floor(field.getBoundingClientRect().y);
  heightCordE = Math.floor(field.getBoundingClientRect().bottom);

  ele.forEach((ele) => {
    const widthValue = getRandom(widthCordS, widthCordE); // x좌표
    const heightValue = getRandom(heightCordS, heightCordE); // y좌표

    ele.style.left = `${widthValue}px`;
    ele.style.top = `${heightValue}px`;
  });
}

function startGame() {
  if (flag === true) {
    if (timeCount < 10) {
      //두자리수 맞춰주기
      timeCountText = `0:0${timeCount}`;
    } else {
      timeCountText = `0:${timeCount}`;
    }
    countText.innerHTML = `${count}`;
    timeText.innerHTML = timeCountText;
    startTimer();

    // 이벤트가 실행중이라면 return
    if (eventCheck === true) {
      return;
    } else {
      carrotField.addEventListener("click", (e) => {
        eventCheck = true;
        clickThis = e.target;
        if (clickThis.className == "bug") {
          endBg.classList.add("on");
          stateText.innerHTML = lostText;
          stopTimer();
        } else if (clickThis.className == "carrot") {
          console.log("설마??");
          clickThis.parentNode.removeChild(clickThis);
          count -= 1;
          countText.innerHTML = `${count}`;
          if (count === 0) {
            endBg.classList.add("on");
            stateText.innerHTML = winText;
            stopTimer();
          }
        }
      });
    }
  } else {
    console.log("flag false일때 실행");
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeCount -= 1;
    timeText.innerHTML = `0:0${timeCount}`;
    if (timeCount == 0) {
      stopTimer();
      endBg.classList.add("on");
      stateText.innerHTML = overText;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  flag = false;
}

btn.addEventListener(
  "click",
  (e) => {
    if (timeCount == 10) {
      newCord(carrot);
      newCord(bug);
    }

    if (flag === true) {
      //실행중일때 버튼을 클릭하면
      btn.innerHTML = `<i class="fas fa-play"></i>`;
      stopTimer();
      carrotField.removeEventListener("click", () => {});
    } else {
      //정지상태일때 버튼을 클릭하면
      flag = true;
      btn.innerHTML = `<i class="fas fa-stop"></i>`;

      startGame();
    }
  },
  true
);

//test

function resetGame() {
  endBg.classList.remove("on");
  count = 10;
  timeCount = 10;
  flag = true;
}

replayBtn.addEventListener("click", () => {
  resetGame();
  newCord(carrot);
  newCord(bug);
  startGame();
});

// 마지막: 정지상태일때 event 없애기
