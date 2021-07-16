// const process = require('process');

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se ha olvidado capturar un error');
    console.error(origen);
    console.error(err);
})

//funcionQueNoExiste();

process.on('exit', () => {
    console.log('El proceso acabó'); 
    setTimeout(() => {
        console.log('Esto NUNCA se va a ver, el proceso terminó ... ');
    }, 0)
})

setTimeout(() => {
    console.log('Esto SI se va a ver, el proceso NO ha terminado ... ');
}, 0)

process.on('beforeExit', () => {
    console.log('El proceso esta por terminar'); 
    /*setTimeout(() => {
        console.log('Esto es un BUG x_X');
    }, 1000)*/
})

console.log('Hola mundo');