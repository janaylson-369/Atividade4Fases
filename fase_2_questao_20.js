const valores = [5, 8, 12, 8, 3];
const a = valores.find(v => v === 8);
const b = valores.filter(v => v === 8);
const c = valores.some(v => v === 8);
console.log(a, b, c);


/*
RESPOSTA:

find(): é parecido do o método filter() porém ele só retorna o primeiro elemento que ele encontrar [ 8 ]

filter(): ele filtra os elementos de uma array por meio de uma condição, todos os elementos que passarem
 pela condição é retornado [8, 8]

some(): ele retorna um valor booleano (true ou false), o primeiro elemento que encontar e satisfaça 
a condição ele retorna true

*/