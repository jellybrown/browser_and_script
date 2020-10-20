function getRandom(min, max) { //랜덤좌표 생성을 위한 함수
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
let flag = false; // 처음 시작시 게임상태 false (timer활용하려면 중요)
let timer;
let count = 10;
let timeCount = 10;
console.log(widthCordS, widthCordE, heightCordS, heightCordE)


//carrot.style.left = `${widthValue}px`;
//carrot.style.top = `${heightValue - carrotHeight}px`;


function newCord(ele) {
    ele.forEach((ele) => {
        const widthValue = getRandom(widthCordS, widthCordE); // x좌표
        const heightValue = getRandom(heightCordS, heightCordE); // y좌표
        
        ele.style.left = `${widthValue}px`;
        ele.style.top = `${heightValue}px`;

    })

}






function startGame() {
    
   
    if(flag === true) {
        if(timeCount !== 10) { //두자리수 맞춰주기
            timeCountText = `0:0${timeCount}`
        } else {
            timeCountText = `0:${timeCount}`
        }
    countText.innerHTML = `${count}`;
    timeText.innerHTML = timeCountText;

    startTimer();
    

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
else {
    console.log("flag false일때 실행");
}
}


function startTimer() {
    
    
    timer = setInterval(() => {
        timeCount -= 1;
        timeText.innerHTML = `0:0${timeCount}`;
        if (timeCount == 0) {
            stopTimer();
        }
    }, 1000);
    
}

function stopTimer() {
    clearInterval(timer);
    flag = false;
    
}



function ifWinGame() {
    if (count === 0) {
        console.log("win");
    }
}



btn.addEventListener("click", (e) => {

    newCord(carrot);
    newCord(bug);
    

    if(flag === true) { //실행중일때 버튼을 클릭하면
        btn.innerHTML = `<i class="fas fa-play"></i>`;
        stopTimer();
    } else { //정지상태일때 버튼을 클릭하면
        flag = true;
        btn.innerHTML = `<i class="fas fa-stop"></i>`;
        startGame();
    }
    
   

}, true)

//test

