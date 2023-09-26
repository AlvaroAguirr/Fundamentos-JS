const containerGal = document.querySelector('.container');
const imagecom =document.querySelector('.modal-body img') 
function getImage(e){
    const image= e.target.src;
    imagecom.src= image;

}

containerGal.addEventListener('click', getImage);