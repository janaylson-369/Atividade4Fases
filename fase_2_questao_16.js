const arr = [1, 2, 3, 4, 5];
const resultado = arr.filter(n => n % 2 === 1).map(n => n * 3).reduce((acc, v) => acc + v, 10);
console.log(resultado);
/* 
Explique passo a passo o funcionamento e o resultado do seguinte código:

RESPOSTA:

primeiro vai filtrar se o número é ímpar ele passa, o map vai multiplicar
por 3 e colocar esse valor em uma nova array por último o reduce vai acumular 
o resultado com o ponto de partida sendo 10 (10 +3 +9 +15 = 37), o resultado de saída vai ser 37.
*/