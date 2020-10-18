function getRandom(min, max) {
    const value = Math.floor(Math.random() * (max - min) + min);
    return value;
}



const field = document.querySelector(".field");
const carrotField = document.querySelector(".carrot_field");
const carrot = document.querySelectorAll(".carrot");
const bug = document.querySelectorAll(".bug");
const btn = document.querySelector("button");
const timeText = document.querySelector(".time span");
const countText = document.querySelector(".count span");
const widthCordS = Math.floor(field.getBoundingClientRect().x);
const widthCordE = Math.floor(field.getBoundingClientRect().width);
const heightCordS = Math.floor(field.getBoundingClientRect().y);
const heightCordE = Math.floor(field.getBoundingClientRect().bottom);
let flag = true;

let count;
let timeCount;
console.log(widthCordS, widthCordE, heightCordS, heightCordE)


//carrot.style.left = `${widthValue}px`;
//carrot.style.top = `${heightValue - carrotHeight}px`;


// 1. for
// 2. 부모의 자식에게 -> for

function newCord(ele) {
    ele.forEach((ele) => {
        const widthValue = getRandom(widthCordS, widthCordE); // x좌표
        const heightValue = getRandom(heightCordS, heightCordE); // y좌표
        console.log(widthValue, heightValue)
        ele.style.left = `${widthValue}px`;
        ele.style.top = `${heightValue}px`;

    })

}







function startGame() {





    count = 10;
    timeCount = 10;
    countText.innerHTML = `${count}`;
    timeText.innerHTML = `0:${timeCount}`;
    const timeLimit = setInterval(() => {
        timeCount -= 1;
        timeText.innerHTML = `0:0${timeCount}`;
        if (timeCount == 0) {
            clearInterval(timeLimit);
        }
    }, 1000);



    carrotField.addEventListener("click", (e) => {
        const clickThis = e.target;
        if (clickThis.className == 'bug') {
            console.log("oh..") //종료하기
        } else if (clickThis.className == 'carrot') {
            clickThis.parentNode.removeChild(clickThis);
            count -= 1;
            countText.innerHTML = `${count}`;
        }
        ifWinGame();



    })
}

function stopGame() {
    clearInterval(timeLimit);
    btn.removeEventListener("click", startGame, true)
}


function ifWinGame() {
    if (count === 0) {
        console.log("win");
    }
}

function checkState() {
    if (flag == false) {
        //멈춘상태
    } else {
        //다시 시작상태
    }
}



btn.addEventListener("click", (e) => {

    newCord(carrot);
    newCord(bug);
    startGame();
    if (e.currentTarget.className == 'will_stop') {
        flag = false;
        btn.innerHTML = `<i class="fas fa-play"></i>`;
        btn.setAttribute("class", "will_start") //현재 정지
    } else if (e.currentTarget.className == 'will_start') {
        flag = true;
        btn.innerHTML = `<i class="fas fa-stop"></i>`;
        btn.setAttribute("class", "will_stop"); //현재 실행중
    };
    checkState();


}, true)