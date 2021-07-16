const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus());
console.log(os.constants);

let SIZE = 1024;

function kb (bytes) { return bytes/SIZE; };
function Mb (bytes) { return kb(bytes)/SIZE; };
function Gb (bytes) { return Mb(bytes)/SIZE; };

console.log(kb(os.freemem()));
console.log(Mb(os.freemem()));
console.log(Gb(os.freemem()));

console.log(kb(os.totalmem()));
console.log(Mb(os.totalmem()));
console.log(Gb(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());

console.log(os.networkInterfaces());
