console.log("Sesion JS05");

/*
//-------------------operadores aritmeticos----------
Adición +
multiplicacion *
substraccion -
division /
exponencial **
resto (modulo) %
*/

//ejemplo
let dinero = 20 + 10;


/*-------------Operadores de asignacion--------------
Asigna un valor a su operando izq basandose en el valor de
su operando derecho
asignacion =
asignacion de adicion +=
*/
dinero += 15;
/*
multiplicacion *=
substraccion -=
division /=
exponencial **=
resto %=
*/
12 + 7 + 12 + 4 + 1;

2 ** 3 ** 2; //512

/*---------------------  Operadores unitarios----------------------------------
un operador unario realiza una operacion en un solo oerando*/
//Negacion -
dinero = -3;
console.log(dinero);
//Conversion a numerico +
dinero = -dinero; //sigue 3 si le ponemos ! seria falso porque lo conviere a boolean y el boll de un num es true amenos que sea 0 o NaN
console.log(dinero)
dinero = + "200" //200 numerico
console.log(dinero);

//typeof
//operador logico not !
let velorBooleano = !true;
console.log(velorBooleano);

//Operadores de incremento y decremento
//operador de preinceremento y predecremento
// pre incremento ++valor
// pre decremento --valor

//operador de post incremento y post decremento;
// post incremento valor ++
numero = 10;
++ numero;
numero ++;
let nuevoValor = numero ++;

console.log("Numero valor ", nuevoValor);
console.log("Numero ", numero);



let nuevoDato = ++numero;
console.log("nuevoDato ", nuevoDato); //14
console.log("numero ", numero); //14


let x = 3;
let y = ++x;

console.log(`x ${x++} y ${++y}`);// 4,5
console.log(`x ${x} y ${y}`);// 5,5

//------------------Operadores lógicos and or-----
const a = true;
const b = false;
const c = true;
console.log(a || b || c); // true


//peradores de corto circuito
//cuando los operadores logicos AND y OR actuan sobre operandos diferentes a booleanos

// OP1 && OP2    si OP1 es verdadero de realiza el resultado de op2
console.log( a || "Holi Crayolli"   );
console.log( b || "Holi Caryolli"   );
console.log( NaN || "El Valor "   );
console.log(    );
console.log(    );




const noDefinido = true;
console.log(noDefinido || theBIgBang);

// Quiero imprimir "Estás Autorizado" si la variable isOnline y isActive son true.
const isOnline = true;
const isActive = true;
if ( isOnline )
  if( isActive )
    console.log("Estás Autorizado");

if (isOnline && isActive)
  console.log('Estas autorizado')

console.log(isOnline && isActive ? "Estas autorizado": "No estas autorizado");

console.log(isOnline && isActive && "Estas Autorizado");


/* Un operador de comparación compara sus operandos y devuelve un valor lógico en función 
de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos,
de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. 
En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo 
apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente.
 */


console.log( true == "true"  ); // false
console.log(  23 < "40" ); // true

console.log(  "b" < "A" ); // false ( 98  < 65 )

console.log(  "Hola" < "HOLA"); // false
          
console.log(  "Hola" < "123"); // false 
          //  H: 72     1: 49

console.log(  "Hola" < "KeHace" + 1000 ); // true 
           // "Hola" < "KeHace1000"  

console.log(  "23" == 23  ); // true

// ------------------- Comparación estricta ------------------
/*
 === estrictamente igual, debe ser igual en el valor y tipo
 !== estrictamente diferente, debe ser difente en valor y tipo

*/
      
console.log( "23" === 23  ); // false;
console.log( "true" === true ); // false;
console.log( "45" !== 45  ) // true


// Operador se asignación =
const myNumber = 34; 

// Desestructuración (Destructuring)
/*
 Es una expresión en JS que hace posible extraer datos de arreglos o objetos y nos
 ayuda a realizar asignaciones más complejas.
*/
let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA} , b:${dataB} `);
// Quiero intercambiar los datos
/*
let temporal;
temporal = dataA;
dataA = dataB;
dataB = temporal;
*/
[ dataA, dataB  ] = [ dataB, dataA ];
console.log(`a: ${dataA} , b:${dataB} `);

const calificaciones = [50, 80, 100, 30, 60, 99 ];
// dataA = calificaciones[0]; // 50
// dataB = calificaciones[1]; // 80
let resto; // rest parameter
[ dataA, , , dataB, ...resto  ] = calificaciones; 
console.log(`a: ${dataA} , b:${dataB} `);
console.log(resto);

const primerAnio ={
  dataA: "43 alumnos",
  dataB: "50 alumnos",
  dataC: "20 alumnos"
};
( {dataA, dataB } = primerAnio);

console.log(`a: ${dataA} , b:${dataB} `);

const auto = {
  model: "Chevrolet",
  year: 2023,
  color : "red",
  motor: "2.0"
}

console.log("Modelo " + auto.model ); //auto["model"]

// Asignando el valor model del objeto auto a la constante model
                  // inicializar con un valor por default
//const { model, colorAuto = "Pistache"} = auto;
                  // Asignar un nuevo nombre al atributo
const { model, color: colorAuto } = auto;
console.log("Modelo " + model + ", color: " + colorAuto ); 

// ------------------  ejercicio ------------------------
/*
   Hacer una función que realice la división de 2 números
   y me entregue (return) en entero el cociente y residuo
*/

function divison(a, b){
    const cociente = parseInt(a / b);
    const residuo = a % b;
    const valor = {resultado : cociente, residuo : residuo};
    return valor;
}
const valor = divison(9,5);
console.log(`El resultado de 9/5, cociente: ${ valor.resultado }, residuo ${ valor.residuo } `);