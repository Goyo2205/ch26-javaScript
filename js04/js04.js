console.log("Sesion JS04 Arreglos y Cilclos");

//Declarar un array
const nombresCh26 = ["Sofi","Alejandor","Ixchel","Said"];
//Usando el constructor de arreglos
const apellidosCh26 = new Array("Montellano","Torres", "Vazques","Otro");
const numCohortesActivas = new Array(26,27,28,29);

console.log("Apellido de Sergio"+ apellidosCh26[1]);
apellidosCh26.push("Ruiz");
console.log(apellidosCh26);


//-------------------matrices

const personasEnCohorte=[
    ["Arath", "José","Karen", "Sofi"],
    ["Manule", "María", "Frnacisco", "Pablo"],
    ["Vennanzio", "Doris", "Brendan", "Lucas"]
];

console.log("Personas ch27: "+ personasEnCohorte[1].join(", "));
console.log("Personas ch27: "+ personasEnCohorte[1][2]);

console.log("Lucas CH28: "+ personasEnCohorte[2][3]);
console.log("Karen CH26: "+ personasEnCohorte[0][2]);

for(let i = 0; i < personasEnCohorte.length;i++){
    for(let j =0; j < personasEnCohorte[i].length;j++){
        console.log(personasEnCohorte[i][j]);
    }
};

/* personasEnCohorte.forEach(element => {
    console.log(element)
}); */ //esto itera las filas 

personasEnCohorte.forEach(fila => fila.forEach(columna => console.log(columna)));


/*
// ----------For of
ejecuta sentencias por cada elemento de un objeto iterable(arrys,strings y objetos)
*/
const myName = "Sergio"
for(let char of myName){
    console.log(char)
}

for(fila of personasEnCohorte){
    for(columna of fila){
        console.log(columna)
    }
}
///------------------------Consideraciones para el ciclo for
/* no es necesario indicar el inicio, la comparacion y la expresion final
*/
let iteracion = 0;
for(;;){
    console.log(iteracion)
    if(iteracion === 5) break;
    iteracion++;
}

/*--------------------Ejercicio
iterar y mostrar a personas en cohrte y detener cuando se encuentre a maria
*/


//el label se declara inmediatamante arriba del for a romper
personas: // se usa un label par aindicar en el brakehacia que ciclo romperá
for(fila of personasEnCohorte){
    for(columna of fila){
        console.log(columna);
        if(columna == "María") break personas;
    }
    //if(columna == "María") break;   EL label es para no usar este
}

//Continue
/*
Termina la ejecucion de la sentencia en la iteracion actual y continua la ejecucion del ciclo
con la proxima iteracion (o el label que se indique)
*/
console.log("")
console.log("===============Uso de continue==============")
personas: 
for(fila of personasEnCohorte){
    for(columna of fila){
        if (columna == 'María' || columna =='Maria') continue;
        const concatenacion = "Persona " + columna;
        console.log(concatenacion);
    }
}

/*---------------ciclo While---------

crea un bucle que ejecuta una sentencia mientras la condicion especificada sea verdadera

sintaxis:

while(condicion){
    sentencias;
}
*/


/*let counter = 0;
while(confirm("Quieres continuar"))
{
    console.log(`Has continuado ${++counter} ${counter > 1 ? "veces":"vez"}`)
}*/

let counter = 0;
const numbers = [9,5,6,7];
while(counter < numbers.length){
    console.log(numbers[counter]);
    counter++;
}

//----------------------Practica
/*

*/



























