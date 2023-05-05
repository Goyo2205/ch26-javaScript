console.log('js 08 clases');

//--------Crear clase
//para el nombre se usa la notacion Pscal Case

class Car{

    //Metodo constructor
    constructor(nameCar, brand, price){
        console.log('Haz creado un nuevo objeto ' + nameCar);
        this.name = nameCar;
        this.brand = brand;
        this.price = price;

    }
    /**
     * 
     * @param {boolean} state 
     * @returns string
     */
    igniteEngine = (state) => state? 'Engine is on': 'Engine is off'

    //Agregar una función que describa las caracteríasticas del auto
    details() {
        return `Es un ${this.brand}, ${this.name} y cuesta: ${this.price}`
    };

}

//----------Usar la clase para instancear(crear) objetos---
//Para instancear se usa new y el nombre de la clase
const elantra = new Car('Elantra', 'Hyundai', '300000');
const aveo = new Car('Aveo', 'Chevrolet', '250000');

console.log(elantra);
console.log(aveo);
console.log(elantra.name + ' ' + elantra.igniteEngine(true));


console.log( aveo.details())

