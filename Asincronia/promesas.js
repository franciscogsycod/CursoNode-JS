function hola(nombre) {
    return new Promise(function (resolve, reject){
       setTimeout(function () {
            console.log('Hola '+ nombre);
            //resolve(nombre);
            reject('Hay un error');
        }, 1500); 
    });
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
      setTimeout(function (){
        console.log('Bla bla bla Platzi ...');
        resolve(nombre);
        }, 1000);  
    });
}

function adios(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Adiós '+ nombre);
            resolve();
        }, 500);
    });
}

// ---

console.log('Iniciando el proceso');
hola('Francisco')
    .then((nombre) =>{ return hablar(nombre);})
    .then((nombre) => {
        return adios(nombre);
    })
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch((error) => {
        console.error('Ha habido un error');
        console.error(error)
    })
