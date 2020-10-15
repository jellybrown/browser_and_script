'use strict';

const special = document.querySelector(".box:nth-child(7)");
const by = document.querySelector(".by");
const to = document.querySelector(".to");
const sp = document.querySelector(".sp");

function clickEvent(e) {
    const rect = special.getBoundingClientRect();
    console.log(rect)
    console.log(`client: ${e.clientX}, ${e.clientY}`);
    console.log(`page: ${e.pageX}, ${e.pageY}`)
}



special.addEventListener("click", clickEvent);


// element.scrollBy({ 
//     top: 100,
//     left: 100,
//     behavior: 'smooth' 
// });


by.addEventListener("click", () => {
    window.scrollBy(0, 100)
});
to.addEventListener("click", () => {
    window.scrollTo(0, 100)
});
sp.addEventListener("click", () => {
    special.scrollIntoView();

});