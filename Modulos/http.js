const http = require('http');

http.createServer(router).listen(3000);

function router (request, response) {
        console.log('Nueva petición ... ');
        console.log(request.url);

        switch(request.url){
            case '/hola':
                response.write('Hola, que tal');
                response.end();
                break;
            default:
                response.write('Error 404');
                response.end();
        }
        /*
        response.writeHead(201, { 'Content-Type': 'text/plain' })
    
        // Se escribe una respuesta al usuario
        response.write('Hola, ya se usar HTTP de NodeJS');
    
        response.end();
        */
}       

console.log('Escuchando HTTP en el puerto 3000');