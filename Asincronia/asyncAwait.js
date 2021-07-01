async function hola(nombre) {
    return new Promise(function (resolve, reject){
       setTimeout(function () {
            console.log('Hola '+ nombre);
            resolve(nombre);
            //reject('Hay un error');
        }, 1500); 
    });
}

async function hablar(nombre){
    return new Promise((resolve, reject) => {
      setTimeout(function (){
        console.log('Bla bla bla Platzi con ...' + nombre);
        resolve(nombre);
        }, 1000);  
    });
}

async function adios(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Adiós '+ nombre);
            resolve();
        }, 500);
    });
}

// ---

async function main() {
    var name = "Francisco";
    let nombre = await hola(name);
    await hablar(nombre);
    hablar(nombre);
    await hablar(nombre);
    await adios(nombre);
}

console.log('Empezamos el proceso ...');
main();
console.log('Terminamos el proceso ...');