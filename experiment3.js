let fontSize = 16;


const heading = document.getElementById("heading");
const input = document.getElementById("inputText");
const para = document.getElementById("para");


const btnHeading = document.getElementById("btnHeading");
const btnBg = document.getElementById("btnBg");
const btnFont = document.getElementById("btnFont");
const btnToggle = document.getElementById("btnToggle");
const btnReset = document.getElementById("btnReset");

btnHeading.addEventListener("click", function () {
    heading.innerText = input.value;
});

btnBg.addEventListener("click", function () {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue"
            ? "#f2f2f2"
            : "lightblue";
});

btnFont.addEventListener("click", function () {
    fontSize += 2;
    para.style.fontSize = fontSize + "px";
});

btnToggle.addEventListener("click", function () {
    para.style.display =
        para.style.display === "none" ? "block" : "none";
});

btnReset.addEventListener("click", function () {
    heading.innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#f2f2f2";
    para.style.fontSize = "16px";
    para.style.display = "block";
    input.value = "";
    fontSize = 16;
});