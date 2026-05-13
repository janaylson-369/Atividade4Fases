const base = { a: 1, b: 2 };
const extra = { b: 3, c: 4 };
const combinado = { ...base, ...extra };
console.log(combinado);
// como os dois têm a o atributo 'b', o último (extra) atropela o primeiro