console.log("algo");


/*Son 7 datos primitivos
String: "Hola"*/
console.log("Tipo String: ","Hola");
/* 
Tipo Number:  12 -45 51.541 Infinity -Infinity NaN
usan 64 bits pero solo emplean 53 para representarlo
*/
console.log("Tipo Number: ", 12, -45, 51.541, 45/0, -45/0, 56*"hola");
console.log("Valor maximo: ", Number.MAX_VALUE);
console.log("Tipo String: ", Number.MIN_SAFE_INTEGER);

console.log("MAX_SAFE_INTEGER +1: ", Number.MAX_SAFE_INTEGER+1);
console.log("MAX_SAFE_INTEGER +2: ", Number.MAX_SAFE_INTEGER+2);

let myBigInt =  9007199254740991n;//Se agrega la n al final
console.log("Valor de dato Bigint: ", myBigInt);

console.log("MAX_SAFE_INTEGER +1n: ", myBigInt+1n);
console.log("MAX_SAFE_INTEGER +2n: ", myBigInt+2n);

let myBar;
console.log("Tipo de dato: ", myBar)

let myVarNull;

console.log("Tipo de dato de myVarNull: ", typeof(myVarNull));
myVarNull = "saludos"
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));



const misDatos = {
    nombre: "Goyo",
    apellido: "Espinoza",
    edad: 24,
    isBelicoso: true,
    musicaPorGenero: {
        corridosTumbados: "Ella Baila Sola",
        rock: "I was made for loving you"
    }
}

console.log("Datos completos: ", misDatos);
console.log("Nombre: ", misDatos.nombre);
console.log("Los tumbados: ", misDatos.musicaPorGenero.corridosTumbados);



