console.log('js 08 clases');

//--------Crear clase
//para el nombre se usa la notacion Pscal Case

class Car{

    //Metodo constructor
    constructor(nameCar){
        console.log('Haz creado un nuevo objeto ' + nameCar);
        this.name = nameCar;
        
    }
}

//----------Usar la clase para instancear(crear) objetos---
//Para instancear se usa new y el nombre de la clase
const elantra = new Car('Elantra');
const aveo = new Car('Aveo');


