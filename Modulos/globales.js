    let i = 1;
    let intervalo = setInterval(() => {
        console.log('Hola Francisco');
        if(i === 3){
            clearInterval(intervalo);
        } else{
            i++;
        }
    }, 1000);

    setImmediate(() => {
        console.log('Hola');
    })

    //console.log(process);
    console.log(__dirname);
    console.log(__filename);