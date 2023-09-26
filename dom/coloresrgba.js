const body = document.querySelector('body');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const trans = document.querySelector('#trans');


function setColor(){
    // rgb(0, 255, 25)
    // rgb (0, 255, 34, 0.5)
    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const transVal =trans.value/100;
    const rgbaColor = `rgba(${ redVal }, ${ greenVal }, ${ blueVal }, ${ transVal })` ;
    body.style.background = rgbaColor;
}

setColor(); 
btnColor.addEventListener('click', setColor);


red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
trans.addEventListener('input', setColor);