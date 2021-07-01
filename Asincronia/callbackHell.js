function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola '+ nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar){
    setTimeout(function (){
        console.log('Bla bla bla Platzi ...');
        callbackHablar();
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adiós '+ nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso ...');
hola('Francisco', function (nombre){
    hablar(function () {
        hablar(function () {
            adios(nombre, function (){
                console.log('Terminando proceso...');
            });
        })
    })
});