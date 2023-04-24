console.log("Sesion JS02");


function multiplica(a,b){
    const resultado = a*b;
    console.log("El resultado de 5*10 es igual: "+ resultado);
}
function divide(dividendo,divisor){
    return dividendo/divisor;
}

multiplica(5,10);
console.log(divide(5,2));
console.log(divide(5,"2"));
console.log(divide("5","2"));
console.log(divide("5 0","2"));