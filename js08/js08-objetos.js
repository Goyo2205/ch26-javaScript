console.log('sesion js08');

const frutasColores = {
    manzana: ['rojo', 'verde', 'amarillo'],
    pera: ['verde'],
    fresa: ['rojo'],
    pepino: ['verde'],
    mango: ['amarillo'],
    naranja: ['anaranjado', 'amarillo'],
    mandarina: ['anaranjado'],
    mora: ['morado'],
    pitaya: ['rosa', 'rojo', 'blanco', 'amarillo']
}
console.log('El pepino es ' + frutasColores.pepino);
console.log('La pitaya es ' + frutasColores.pitaya[1]);//rojo
console.log('La pitaya es ' + frutasColores.pitaya.join('-'));//roja-rojo-blanco-amarillo

//modificar un valor
//agregar color verde a mango

frutasColores.mango.push('verde');
console.log('Mango colores ' + frutasColores.mango);//roja-rojo-blanco-amarillo


//-------------Iterando los objetos-------------
//Iterar los valores con for-in
//Iterar sobre todas las propiedades (keys) de un objeto

for(let fruta in frutasColores){
    console.log(`${fruta} tiene los colores ${frutasColores[fruta]}`)
}

//-----------------Uso de symbol----------------

const sueldoOculto = Symbol();
//const ejemplo =2;

const datosEmpleado = {
    nombre: "El kesa",
    apellido: "Britas",
    [sueldoOculto]: 50_000
    //[ejemplo]: ejemplo      //seria 2:2 porque toma lo de adentro de ejemplo y lo iguala a la variable que es 2
}

for ( let dato in datosEmpleado){
    console.log(`${dato}: ${datosEmpleado[dato]}`)
}

//localStorage.setItem("datos-empleado", JSON.stringify(datosEmpleado));
sessionStorage.setItem("datos-empleado", JSON.stringify(datosEmpleado));//JSON.stringify no convierte los tipo simbol y por eso sirve para ocultar




//Bote de Lunetas
const boteLunetas ={
    gramaje: 20,
    sabor: 'Chocolate', 
    costo: 35,
    cantidad: 40,
    gramoPorLuneta: .5,

    abrir: function(){
        return 'Despachar producto';
    },

    comer: function(lunetasComidas){
        if (this.cantidad == 0) return 'Ya no hay gordo'
        this.cantidad -= lunetasComidas;
        this.gramaje -= lunetasComidas*this.gramoPorLuneta
        return this.cantidad;
    }
}

console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)
console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)
console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)
console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)
console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)
console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)
console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)
console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)
console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)
console.log(`tienes ${boteLunetas.cantidad}, te comes 5 luntetas te quedan: ${boteLunetas.comer(5)}`)

