const btn = document.querySelector("form button");
const input = document.querySelector("#user_text");
const mainLists = document.querySelector(".main_lists");
let delIcon;
let count = 0;

function addEvent() {
    const val = input.value;
    if (val === '') {
        input.focus();
        return;
    }
    count += 1;

    const item = createList(val, count);
    mainLists.appendChild(item);
    input.value = '';
}

function createList(val, count) {
    const newList = document.createElement('li');
    newList.setAttribute("data-id", count);
    newList.innerHTML = `
         <span class="list">${val}</span> 
         <button class="trash_icon">
            <i class="far fa-trash-alt" data-id=${count}></i>
         </button>
     `;
    console.log(newList);
    return newList;
}

btn.addEventListener("click", () => {
    addEvent();
});

mainLists.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
        const toBeDel = document.querySelector(`li[data-id="${id}"]`);
        toBeDel.remove();
    }
})