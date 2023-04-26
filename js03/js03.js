console.log("Sesion JS03")


/*---------------Declaracion de bloque*/
{
    /*
    las variables declaradas con let y const solo tendran alcance dentro del bloque o bloques anidados
     */
    {
        /*
        bloque anidado
        si una variable local tiene el mismo nombre de una variable local oculta las otras variables, 
        para que la variable local sea usada
        */
    }
}


/*---------------------Condicional if/else------------------
if ejecuta una sentencia si una condicion especificada es evaluada como verdadera
    if(condicion) sentencia

    if(condicion){
        sentencias
    } else if(){

    } esle if(){

    } else {

    }
*/
const temperatura = document.getElementById("#temperatura");
let mensaje;

if (temperatura === 21) { mensaje = `Temperatura ideal ${temperatura}`; }
else if( temperatura>21) { 
  mensaje = `Temperatura de ${temperatura} grados es caliente`;
} 
else if( temperatura<21) { 
  mensaje = `Temperatura de ${temperatura} grados es fría`;
}
else { 
  mensaje = `Temperatura de ${temperatura} grados no existe`;
}

console.log(mensaje);

//----------------------------Ejercicio
/*
preguntar el numero del mes del 1 al 12
de acuerdo al mes desplegar un alert o en el DOM la estacion del año
donde 12,1,2 = invierno
3,4,5 = primavera
6,7,8 = verano
9,10,11 = otoño
usar if else 
*/


//document.querySelector("input").addEventListener('Change', (e) => console.log(document.getElementById('mes').value));

    

const getEstacion = (mes=document.getElementById('mes').value) => {
    mes = parseInt(mes)
    /*if (mes == 1 || mes == 12 || mes == 2) alert("Invierno");
    if (mes == 3 || mes == 4 || mes == 5) alert("Primavera");
    if (mes == 6 || mes == 7 || mes == 8) alert("Verano");
    if (mes == 9 || mes == 10 || mes == 11) alert("Otoño");*/
    console.log(mes);
    switch(mes){
        case 1: case 12: case 2:
            alert("Invierno");
            break;
        case 4: case 5: case 3:
            alert("Primavera");
            break;
        case 7: case 8: case 6:
            alert("Verano");
            break;
        case 10: case 9: case 11:
            alert("Otoño");
            break;
        default:
            alert("estas en otro planeta");
            break;
    }
};




/*-------------------------Switch
la instruccion switch evalua una expresion y se compara con el valor de cada instancia en 'case' y se ejecuta las 
senencias asociadas a ese case 'case' hasta que se encuentra la sentencia break

swithc(expresion){
    case valor1:
        sentencias;
        break;
    case valor2:
        sentencias;
        break;
    case valor3:
        sentencias;
        break;
    default:
        sentencias;
        break;
}
*/

const velocidadVentilador = 1;
let msj;

const setVelocidadVentilador = (velocidad) =>{
switch(velocidad){
    case 0:
        msj = "Apagado";
        break;
    case 1:
        msj = "Valocidad Baja";
        break;
    case 2:
        msj = "Velocidad Media";
        break;
    case 3:
        msj = "Velocidad Alta";
        break;
    case 4:
        //msj = "Rapido y Furioso";
        //break;
    case 5:
        msj = "Rapido y Furioso";
        break;
    default:
        msj = "El nivel no existe";
        break;
    };
    return msj;
}

console.log(`El ventilador está en ${setVelocidadVentilador(4)}`)



//-------------------Operador condicional ternario
/*
Es el unico operador de js que tiene 3 operandos. Generalmente
se usa como opcion a la sentencia if-else

sintaxis:

    condicion ? expresionSiCondicionEsVerdadera : expresionSinLaCondicionEsFalsa
*/

const subtotal = 1_000;
const pagoTarjetaCredito = true;
console.log(`La cuenta es de: ${pagoTarjetaCredito ? subtotal*1.025 : subtotal*1} pesos`)

const edad = 15;
console.log(`Acceso ${edad>=18? "Permitido":"Denegado"}`)


//--------------refactorozar con terniario

/* function saludo(numero) {
    if (numero > 1) {
      saludo(numero - 1);
    }
    console.log("Saludo " + numero);
  }
  saludo(10); */

function saludo(numero) {
    numero > 1 ? saludo(numero-1):{};
    console.log("Saludo " + numero)
}
  
  saludo(10);



