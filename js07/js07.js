console.log('Sesion JS07');

const primerPaso = () => console.log('01- Inicio de mi programa');
const segundoPaso = () => console.log('01- Desarrollo de mi programa');
const tercerPaso = () => console.log('01- Fin de mi programa');

primerPaso();
segundoPaso();
tercerPaso();


//-------------------programacion Asincrona
/*
setTimeout()
Establece un temporizador que ejecuta una funcion una vez
que expire el temporizador*/

const desarrolloAsincrono = (saludo) => {
    console.log('Hola ' + saludo);
}

const segundoPasoAsincrono = (saludo) => {
    /* setTimeout(desarrolloAsincrono, 4000 , saludo); */
    //setTimeout((saludoRef) => console.log('Hola ' + saludoRef), 4000 , saludo);
    //al ser llamada la fucnion flecha, mete saludo en el parametro slaudoRef
    //lo siguiente es una alternativa
    setTimeout(() => console.log('Hola ' + saludo), 4000);
}


console.log('----------------------');
primerPaso();
/* setTimeout(desarrolloAsincrono, 3000, 'ch26'); */
segundoPasoAsincrono('CH 26 con 4 seg de retardo');
tercerPaso();

/*--------------------setInterval---------
Ejecuta una funcion de manera reiterada con un tiempo  de retardo fijo entre cada llamda
*/

const segundoPasoConIntervalo = (saludo) => {
    setInterval( ()=>console.log('La banda malandra es ' + saludo) , 20000 );
}

console.log('-----------setInterval-----------');
primerPaso();
segundoPasoConIntervalo('CH 26 wu, wu');
tercerPaso();


//----------------Iniciar y detener setInterval------------

const refStartInterval = document.getElementById('iniciar');
const refStopInterval = document.getElementById('detener');
const refDateH2 = document.getElementById('fecha');

let idInterval;

//NOTA: lo primero que te manda el event listener es el evento, que es lo que iria en los parentesis de la funcion flecha
refStartInterval.addEventListener('click', () => {
    //console.log('Se pulsó iniciar');
    //Nota: set interval regresa un id para saber cual es
    idInterval = setInterval(() => {
        refDateH2.innerHTML = new Date().toLocaleString();        
    }, 1000);
    //refStartInterval.disabled = true;
    ableDisable(refStartInterval,true);
    ableDisable(refStopInterval, false);
});


refStopInterval.addEventListener( "click" , ()=>{
    //console.log("Se pulsó detener");
    clearInterval( idInterval ); //detener mi intervalo
    //refStartInterval.disabled = false;
    ableDisable(refStartInterval,false);
    ableDisable(refStopInterval,true);
});


function ableDisable(refObj,able){refObj.disabled = able};
