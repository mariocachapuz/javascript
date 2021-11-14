function changeBgColor(){
    let hex = "0123456789ABCDEF".split('');
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    const main = document.getElementsByTagName("main")[0];
    document.getElementById("color").innerHTML = color;
    document.getElementById("color").style.color = color;
    main.style.backgroundColor = color;
}

function reset(){
    location.reload();
}


