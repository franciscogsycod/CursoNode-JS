const fs = require('fs');

function leer(ruta, callback){
    fs.readFile(ruta, (err, data) => {
        //Leido
        console.log(data.toString());
    })
}

function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, function(err) {
        if(err){
            console.log('No he podido escribirlo',err);
        }else{
            console.log('Se ha escrito correctamente!');
        }
    });
}

function borrar(ruta, callback){
    fs.unlink(ruta, callback);
}

//leer('./archivo2.txt');
//escribir('./archivo2.txt','Hola Soy un archivo que se va a borrar posteriormente');
borrar('./archivo2.txt', console.log);