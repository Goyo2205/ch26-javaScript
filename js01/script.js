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



const misDatosDePerfil = {
    nombre: "Goyo",
    apellido: "Espinoza",
    edad: 24,
    isBelicoso: true,
    musicaPorGenero: {
        corridosTumbados: "Ella Baila Sola",
        rock: "I was made for loving you"
    },
    nombreComplteto: function fullName(){
        return misDatosDePerfil.nombre + "" + misDatosDePerfil.apellido + ", soy el belicón"
    }
}

console.log("Datos completos: ", misDatosDePerfil);
console.log("Nombre: ", misDatosDePerfil.nombre);
console.log("Los tumbados: ", misDatosDePerfil.musicaPorGenero.corridosTumbados);


const cancionesPP = [
    "Soy el Belicon",
    "El Azul",
    "EL Tsurito",
    "AMG",
    {
        2020:5,
        2021: 30,
        2022: 56,
        total:91
    }
]

console.log("Cancion con color: ", cancionesPP[1])
console.log("Canciones hechas en el ano 2021: ", cancionesPP[4].total)
console.log("Canciones hechas en el ano 2021: ", cancionesPP[4]["total"])
console.log("Canciones hechas en el ano 2021: ", cancionesPP[4][2021])
console.log("Canciones hechas en el ano 2021: ", cancionesPP[4]["2021"])

console.log("Num total elemantos: ", cancionesPP.length);
console.log("Contiene la cancion AMG: ", cancionesPP.indexOf("AMG")>-1);


const myNumber = 420;
console.log("Num. de minutos en la sesion: "+ myNumber);
const myNumberTxt = String(myNumber);
console.log("Num. de minutos en la sesion: "+ myNumberTxt);


const myString = "420";
const sumatoria = 80 + Number(myString);
console.log("Valor de sumatoria: ", sumatoria);

const myStringInteger = "420.5552";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log("Valor de la sumatoria entera: ", sumatoriaEntera);


//NOTA, todo string que tenga al menos un caracter, al se evaluado como booleano da true
//tambien un Boolean(" ") con un caracter es true
const isBelicoso = "true";

if (isBelicoso)
    console.log("Denle su belikin");
else 
    console.log("Abra paso a la barredora");


