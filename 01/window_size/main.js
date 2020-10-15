'use strict';

const sc = document.querySelector(".sc span");
const ot = document.querySelector(".ot span");
const inn = document.querySelector(".inn span");
const cl = document.querySelector(".cl span");

const setting = () => {
    const screenSizeWidth = window.screen.width;
    const screenSizeHeight = window.screen.height;
    sc.textContent = `${screenSizeWidth}, ${screenSizeHeight}`;
    const outerWidth = window.outerWidth;
    const outerHeight = window.outerHeight;
    ot.textContent = `${outerWidth}, ${outerHeight}`;
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    inn.textContent = `${innerWidth}, ${innerHeight}`;;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    cl.textContent = `${clientWidth}, ${clientHeight}`
}

window.addEventListener("resize", setting)
setting();