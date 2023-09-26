const body = document.querySelector('body');
const h2 = document.querySelector('h2');
const button = document.querySelector('button');

function setColor(){
    const caracteres= '0123456789ABCDEF';
    let rgbColor= '#';
    let rgbColor2= '#';
    for (let i=0; i<6; i++){
        rgbColor +=  caracteres.charAt (Math.floor(Math.random() *16));
        rgbColor2 +=  caracteres.charAt (Math.floor(Math.random() *16));
    }
    body.style.background= rgbColor;
    button.style.background= rgbColor2;
    h2.innerHTML=rgbColor;
    h2.innerHTML=rgbColor2;
}

setColor();