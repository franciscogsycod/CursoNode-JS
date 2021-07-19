// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1,3,5,999]);
let buffer = Buffer.from('Francisco');

console.log(buffer.toString());

// ---

let abecedario = Buffer.alloc(26);

console.log(abecedario);

let ascii_a = 97;

for (let i=0 ; i<26 ; i++) {
    abecedario[i] = i + ascii_a;
}
console.log(abecedario.toString()); 