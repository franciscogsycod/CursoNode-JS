function soyAsincrono(miCallback) {
    console.log('Hola soy una funcion asincrona');
    // Creando el asincronismo
    setTimeout(function() {
        console.log('Estoy siendo asincrono');
        miCallback();
    }, 3000);
}

console.log('Iniciando proceso ...');

soyAsincrono(function() {
    console.log('Terminando proceso ...');
});