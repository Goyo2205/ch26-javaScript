console.log('sesion js07  API Fetch')


const url = "https://fakestoreapi.com/products";

/* const getProducts = ( httpUrl ) =>{    

    fetch( httpUrl )
        .then( result => {
            console.log("Respuesta: " + result.status );
            return result.json(); // Conversión de JSON a objeto
        })
        .then ( (productsObj)=> {
            console.log(productsObj)
            // Quiero imprimir solo el titulo de cada producto.
            productsObj.forEach(element => {
                console.log(element.title);
            });

        })
        .catch( error=> console.log(error)  );

}

getProducts( url ); */


//--------Consumir Fetch Usando AWait---------------
const getProductsWithAwait = async (httpUrl) => {
    const productsJson = await fetch(httpUrl);
    const products = await productsJson.json();
    console.log(products);

    for( let product of products) console.log(product.title);
    console.error(error);
}
//getProductsWithAwait(url);

//agragar try catch

const getProductsWithAwaitTry = async (httpUrl) => {
try {
    const productsJson = await fetch(httpUrl);
    const products = await productsJson.json();
    console.log(products);

    localStorage.setItem('mis-productos', JSON.stringify(products))//key, value

    for( let product of products) console.log(product.title);

} catch (error) {
    console.error(error);
}
}
getProductsWithAwaitTry(url);
