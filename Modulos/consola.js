console.log('Algo');
console.info('Algo');
console.error('Algo');
console.warn('Algo');

let tabla = [
    {
        a: 1,
        b: 'Z',
    },
    {
        a: 29,
        b: 'A',
    }
]

console.log(tabla);
console.table(tabla);

console.group('Saludo a Francisco');
console.log('Hola Francisco');
console.log('Bla bla bla');
console.log('Adiós Francisco');
console.groupEnd('Saludo a Francisco');

console.log('Hola mundo');

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');