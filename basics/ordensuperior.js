// funciones d eodender superior
//high order function

/* 
 Funciones que reciben funciones 
 como parametros 
*/

const myFunction= () => {
console.log('ejectura mi Funcion');
}
myFunction();
const sameFunction= myFunction;
sameFunction();


const otherSameFunction = myFunction;
otherSameFunction();

const funOne= () =>{
    console.log(' ejecuta funcion One');
}

const funTwo = (username)=>
{

    console.log( 'ejecuta funcion two');
    console.log( 'hola ' + username);


}

const funThree= (otherfunction)=> {
    console.log ('inicia funcion 3');
    otherfunction()
    console.log('termina Funccion3');


}


funOne();
funTwo('alvaro');
funTwo('clark kent');
funThree (funOne);
funThree(()=> console.log ('Soy una Arrow Function'));
 