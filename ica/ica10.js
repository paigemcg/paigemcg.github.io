const button1 = document.getElementById("button1");
button1.addEventListener('click',changeText);

const heading = document.querySelector("h1");

function changeText(){
    const head = prompt("announce something");
    heading.textContent = head;
}

const button2 = document.getElementById("button2");
button2.addEventListener('click',changeItem);

function changeItem() {
    document.getElementById("button2")
    button2.style.backgroundColor = "green";
}