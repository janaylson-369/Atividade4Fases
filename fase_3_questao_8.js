const valores = [10, 20, 30, 40];
function soma(a, b, ...resto) { //a=10, b=20, resto é[30, 40] tamanho 2
    return a + b + resto.length;
}
console.log(soma(...valores));