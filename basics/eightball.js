const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random()* 8);
    console.log(opcion)
    let resp;
    switch (opcion){
        case 1:
            resp = 'todo saldra bien!';
            break;
        case 2: 
        resp =' eso tenlo por seguro'
        break;
        case 3:
            resp=" deberias intentarlo"
            break;

        case 4:
            resp=" no deberias"
            break;

        case 5: 
        resp= "piensalo de nuevo"
        break;
        case 6:
            resp=" la primera opcion era mejor "
            break;
        case 7: 
        resp=" si"
        break;
        default:
            resp= "no lo se ";
    }
    respuesta.innerHTML=resp;
}
