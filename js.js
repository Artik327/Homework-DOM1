function block1(){
    let elem = document.getElementById('box1');
    elem.style.color = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
}

function block2(){
    let elem = document.getElementById('box2');
    elem.style.borderRadius = "30%";
}

function block3(){
    document.body.style.background = "green";
}

function block4(){
    let elem = document.getElementById('box4');
    elem.style.backgroundColor = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
}


function rnd(arg) {
    return Math.floor(Math.random() * arg);
}


function block5(){
    let elem = document.getElementById('box5');
    elem.style.fontFamily = "serif";
}