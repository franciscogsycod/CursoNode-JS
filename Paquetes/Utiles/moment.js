const momento = require('moment');

let ahora = momento();

console.log(ahora.toString());

console.log(ahora.format('DD/MM/YYYY - HH:MM:SS'));