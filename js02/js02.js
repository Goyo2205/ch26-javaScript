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