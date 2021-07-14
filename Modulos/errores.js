function seRompe(){
    return 3+z;
}

try {
    seRompe();
}catch(err) {
    console.error('Vaya, algo ha salido mal ...');
    console.error(err);
}

console.log('Continua el programa');

function seRompeAsync(){
    setTimeout(function() {
        try{
            return 3+z;
        } catch(err3){
            console.log('Probando try/catch dentro de async');
            console.log(err3);
        }
    },1000);
}

console.log('Sigue continuando el programa ... ')

try {
    seRompeAsync();
}catch(err2){
    console.error('Algo salio mal con Asyncrona ... ');
    console.error(err2);
}