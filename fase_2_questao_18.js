const lista = [4, 8, 12, 16];
const r = lista.splice(1, 2);
console.log(lista, r);

/* . O código abaixo modifica o array original. Explique o motivo e proponha duas formas de 
evitar essa mutação:

RESPOSTA:
o motivo é porque está usando o método splice(), ele modifica a array original
forma de evitar:
*/

// 1 tospliced
const lista = [4, 8, 12, 16];
const r = lista.toSpliced(1, 2);
console.log(lista);
console.log(r); 

// 2 spread e desestruturação

const lista = [4, 8, 12, 16];
const [...listacopia] = lista;
const r = listacopia.splice(1, 2);
console.log(lista, r);

