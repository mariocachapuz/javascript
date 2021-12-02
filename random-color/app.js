let app = document.getElementById('app');
let body = document.body;
let header = document.createElement('header');

body.style.margin = 0;
body.style.padding = 0;
body.style.boxSizing = "border-box";
body.style.fontFamily = "sans-serif";

header.style.width = "100vw";
header.style.height = "10vh";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";
header.style.boxShadow = "0 0 15px #aaa";

let colorIdDiv = document.createElement('div');
let colorId = document.createElement('h1');
colorId.innerHTML = "#FFFFFF";
colorIdDiv.style.marginLeft = "5rem";
colorIdDiv.append(colorId);

let h2 = document.createElement('h2');
h2.innerHTML = "Random Color";
header.append(h2);

let h1div = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerHTML = `Background color: `;
h1div.append(h1);


let buttonChangeColor = document.createElement('button');
setPrimaryBtnClass(buttonChangeColor);
buttonChangeColor.innerHTML = "Click to change color";

let buttonReset = document.createElement('button');
setPrimaryBtnClass(buttonReset);
buttonReset.innerHTML = "Reset";

let mainDiv = document.createElement('div');
mainDiv.id = "main";
mainDiv.style.height = "90vh";
mainDiv.style.margin = "0 auto";
mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "column";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyContent = "center";

let colorData = document.createElement('div');
colorData.style.backgroundColor = "black";
colorData.style.color = "white";
colorData.style.width = "600px";
colorData.style.marginTop = "10rem";
colorData.style.padding = ".5rem 2rem";
colorData.style.borderRadius = "5px";
colorData.style.display = "flex";
colorData.append(h1div);
colorData.append(colorIdDiv);

let buttons = document.createElement('div');
buttons.style.width = "100%";
buttons.style.margin = "3rem 0"
buttons.style.display = "flex";
buttons.style.alignItems = "center";
buttons.style.justifyContent = "center";
buttons.append(buttonChangeColor);
buttons.append(buttonReset);

buttonChangeColor.onclick = changeBgColor;
buttonReset.onclick = reset;

mainDiv.append(colorData);
mainDiv.append(buttons);
app.append(header);
app.append(mainDiv);

function setPrimaryBtnClass(btn){
    btn.style.border = "2px solid black";
    btn.style.margin = "0 .5rem";
    btn.style.borderRadius = "5px";
    btn.style.backgroundColor = "white";
    btn.style.padding = "10px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "16px";
}

function changeBgColor(){
    let hex = "0123456789ABCDEF".split('');
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    const main = mainDiv;
    const c = colorId;
    c.style.color = color;
    c.innerHTML = color;
    main.style.backgroundColor = color;
}

function reset(){
    location.reload();
}

function checkScreenSize(){
    if(smallScreen.matches){
        colorData.style.width = "300px";
        colorData.style.fontSize = "9px";
        colorIdDiv.style.marginLeft = "1rem";
    }
}

const smallScreen = window.matchMedia("(max-width: 799px)");
checkScreenSize();
smallScreen.addEventListener(checkScreenSize);