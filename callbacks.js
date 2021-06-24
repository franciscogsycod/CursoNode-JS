function soyAsincrono() {
    console.log('Hola soy una funcion asincrona');
    // Creando el asincronismo
    setTimeout(function() {
        console.log('Estoy siendo asincrono');
    }, 1000);
}

console.log('Iniciando proceso ...');

soyAsincrono();

console.log('Terminando proceso ...');