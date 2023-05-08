console.log('JS09 uso de axios')

const url = 'https://reqres.in/api/users?page=2';

const getUsersFetch = () => {
    fetch(url).then(response => response.json())
    .then( users => {
        console.log(users.data)
    }).catch(error => console.log(error))
}

/* const getUsersAxios = () => {r
    
    axios.get(url)
        .then(users => {
            console.log(users.data.data);
        })
        .catch(erro => console.log(error));
} */


// ahora con await
/* const getUsersAxios = async() => {
    const users = await axios.get(url);
    console.log(users.data.data)
};
 */

// ahora con try catch para el manejo de exepciones
const getUsersAxios = async() => {
    try{
        const users = await axios.get(url);
        console.log(users.data.data)
    }
    catch (error){
        console.log(error)
    }
};
