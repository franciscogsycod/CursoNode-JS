const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');

// --- Procesos cortos
/*
exec('node ./consola.js', (err,stdout, stderr) => {
    if(err){
        console.log(stderr);
        return false;
    }else{
        console.log(stdout);
    }
})
*/

// --- Procesos complejos

let proceso = spawn('ls',['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log(process.killed);
    console.log(dato.toString());
})
proceso.on('exit', function () {
    console.log('El proceso termino...');
    console.log('El proceso terminó?? ... ' + process.killed);
})