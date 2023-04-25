console.log("Sesion JS02");

function multiplica(a, b) {
  const resultado = a * b;
  console.log("El resultado de 5*10 es igual: " + resultado);
}
function divide(dividendo, divisor) {
  return dividendo / divisor;
}

multiplica(5, 10);
console.log(divide(5, 2));
console.log(divide(5, "2"));
console.log(divide("5", "2"));
console.log(divide("5 0", "2"));

/*                  Funciones Expresadas
son declaradas desntro de la asignacion de variable
pueden ser anonimas (no tienen nombre)
no tienen hoisting, por lo que se cargan en memoria
hasta que se utilicen
*/

/*                  Sintaxis
const nombreVariable = function nombreFuncion(parametros){
    instrucciones;
}
*/

const sum = function sumatoria(a, b) {
  return a + b;
};

const resta = function (a, b) {
  return a - b;
};
  /*          funciones autoinvocadas
self-invoking fucntions 
se autoinvocan, se pueden definir como funciones anonimas
*/

(function () {
    console.log("me auto invoco");
  }
)();

/*          Funciones Flecha
Arrow Functions
Son fucniones similares a las declaradas, pero: 
no requiere la palabra function
si tiene una fola isntruccion, no requiere las {}
si las instrucciones es el mismo retorno, no requiere la palabra return
*/

/*
const areaRectangulo = function (largo, alto){
    return largo*alto;
}*/

/*function areaRectangulo(largo, alto) {
  return largo * alto;
}
*/

const areaRectangulo = (largo,alto) => largo*alto;

console.log("Area de rectangulo 5x3: " + areaRectangulo(5, 3));

/*
//------------parametros default------------------
const areaTriangulo = (base,altura) => base*altura/2;
console.log("Area de triangulo b:5, a:10 = "+areaTriangulo(5,10));
console.log("Area de triangulo b:9 = "+areaTriangulo(9)); daria undefined sin los parametros default
*/

//------------parametros default------------------
/**
 * 
 * @param {number} base es la base del triangulo
 * @param {number} altura es la altura del traingulo
 * @returns devuelve el area del triangulo
 */
const areaTriangulo = (base=1,altura=1) => base*altura/2;
console.log("Area de triangulo b:5, a:10 = "+areaTriangulo(5,10));
console.log("Area de triangulo b:9 = "+areaTriangulo(9));



/*        parametros rest
Rest parameters
nos permite reprsdentr una serie de valores indefinidos en los argumentosd
estos se presentan como un array
*/

/*function sumatoriaVariosNumeros(a,b){
  let suma;
  suma = a+b;
  return suma;
}

console.log("sumatorioa de varios numero: "+ sumatoriaVariosNumeros(5,6,7,89));
*/

function sumatoriaVariosNumeros(a,b,...restoDatos){
  let suma;
  suma = a+b;

  for (let i = 0; i< restoDatos.length; i++){
    suma += restoDatos[i];
  }

  return suma;
}
console.log("sumatorioa de varios numero: "+ sumatoriaVariosNumeros(5,6));
console.log("sumatorioa de varios numero: "+ sumatoriaVariosNumeros(5,6,9,10));
console.log("sumatorioa: "+ sumatoriaVariosNumeros(1,2,3,4,5,6,7,8,9,10,11,12));



/* function imprimirEnVarios(){
  const nombre = prompt("Dime tu nombre");
  const imprimible = `Hola ${nombre}, espero que tengas un buen día`;
  console.log(imprimible);
  alertar(imprimible);
  imprimirEnH1(imprimible);
}
function alertar(imprimible){
  //alert.log(imprimible);  esto no jala no seas wey
  console.warn(imprimible)
}
function imprimirEnH1(imprimible){
  document.getElementById("h1").innerText = imprimible;
} */


// --------------- Funciones de Callback --------------------
// Función que se pasa a otra función como argumento, para luego invocarse
// para completar algún tipo de rutina o acción.

// 3 funciones, una que imprima en consola, alert, DOM h1.
// 1 parámetro de entrada.
// no tiene return.

// Función que imprime un mensaje en la consola
function printToConsole(mensaje) {
  console.log(mensaje);
}

// Función que muestra una alerta en la pantalla
function showAlert(mensaje) {
  alert(mensaje);
}

// Función que agrega un encabezado h1 al DOM
function addH1ToDOM(mensaje) {
  const h1 = document.createElement("h1");
  h1.innerText = mensaje;
  document.body.appendChild(h1);
}

const addH1 = (mensaje) =>{
  document.getElementById("h1").innerText = mensaje;
};

function getNamePrintToConsole(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    printToConsole(text);
}
function getNamePrintToDOM(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    addH1(text);
}
/*function getNameAndPrint( opcion   ){ // Esta es la buena
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    if (opcion === 1)
      printToConsole(text);
    else if(opcion===2)
      addH1(text);
    else
      showAlert(text);
}
getNameAndPrint(1);
getNameAndPrint(2);
getNameAndPrint(3);*/

function getNameAndPrint(funcionImprimir){
  const name = prompt("Dime tu nombre");
  const text = `Hola ${name}, espero tengas un gran día`;
  funcionImprimir(text);
}

getNameAndPrint(printToConsole);
getNameAndPrint(showAlert);
getNameAndPrint(addH1);


