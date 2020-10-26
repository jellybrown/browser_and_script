const target = document.querySelector(".target");
const cordText = document.querySelector(".cord_text");
const lineX = document.querySelector('.lineX');
const lineY = document.querySelector('.lineY');

window.addEventListener('load', () => {
    const imageXminus = target.getBoundingClientRect().width * 0.5;
    const imageYminus = target.getBoundingClientRect().height * 0.5; // 죄표에서 빼줘야 할 값


    function moveEvent(e) {
        //성능개선
        const cordX = e.clientX;
        const cordY = e.clientY;

        target.style.transform = `translate(${cordX - imageXminus}px, ${cordY - imageYminus}px)`;
        cordText.style.transform = `translate(${cordX+30}px,${cordY+30}px)`;
        cordText.textContent = `${cordX}px, ${cordY}px`;
        lineX.style.transform = `translate(0, ${cordY}px)`;
        lineY.style.transform = `translate(${cordX}px, 0)`;

    }

    document.addEventListener("mousemove", moveEvent);
})