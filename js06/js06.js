console.log("Sesion JS06");

// función definida
function findElementByIdFnc01 ( /*parametros*/ ){
    /* instrucciones */
    return 3*4;
}

// función expresada
const findElementByIdFnc02 = function ( /*parámetros*/) {
    return 3*4;
};

const findElementByIdFnc03 = (/*parámetros*/ ) => {
    return 3*4;
};

const findElementByIdFnc04 = () =>  3*4;

const findElementByIdFnc05 = variableParametro =>  3*4;

const findElementById = ( nameOfDeveloper ) => {
    const tituloRef = document.getElementById("titulo");

    //tituloRef.innerHTML = tituloRef.innerHTML + nameOfDeveloper;
    tituloRef.innerHTML += nameOfDeveloper;

}
findElementById(", Sergio");

const changeSubtitleById = ( newTxt ) => {
    const subtitleRef = document.getElementById("subtitulo");
    
    subtitleRef.innerHTML = ` ${subtitleRef.innerText}, <em>${newTxt}</em>`;

}
changeSubtitleById("viernes de cholos");

//------------ Encontrar elementos por su tag ----------------------------------
// getElementsByTagName()

const changeEmphasis = ( newTxt, url ) => {
    const emphasisRef = document.getElementsByTagName("em");
    //console.log(emphasisRef);
    for (element of emphasisRef){
        console.log(element);
        element.innerHTML = `<a href="${url} target="_blank">${newTxt}, `;
    }

};

changeEmphasis("viernes friki", "http://google.com");

/* selector universal */

const findElementByQuerySelector = () => {
    const refElements = document.querySelector('p em');

    refElements.innerHTML = "La CH26 es bien chida <strong>SIUUUUU</strong>";
}
findElementByQuerySelector();       


//-------------------crear nuevo elemento

const newElement =() => {
    const newElementRef = document.createElement('p');
    newElementRef.innerHTML = `LA CH26 le gusta:
    <ul>
        <li>pan</li>
        <li>papas</li>
        <li>pozole</li>
        <li>pizza</li>
    </ul>
    `
    const articleRef = document.querySelector('article');
    articleRef.appendChild(newElementRef );// se agrega nuevo elemento

    //clonar el nodo anterior 
    //const nodoClonado = articleRef.cloneNode(true);
    //document.querySelector('#article-news').appendChild(nodoClonado);

}
newElement();

const changeColor = (color) => {
    const refIntro = document.getElementById('noticias');
    refIntro.style.color = color;
}

changeColor('red');


// Agregar a un elemento un border
// .style.border 
// .style.border = "thick solid #0000FF";


const changeAtributes = (color,borderC) => {
    const refIntro = document.getElementById("noticias");
    refIntro.setAttribute("style", `color:${color}; border:thick solid ${borderC}`);
} 
changeAtributes ("red","#0000FF");





const quitarBoton = ( ) => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display = "none"; // quitar elemento
}

const ocultarBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "hidden"; // ocultar elemento
}
const reestablecerBoton = () => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display = "inline"; // quitar elemento
    buttonRef.style.visibility = 'visible'; // ocultar elemento
}


















