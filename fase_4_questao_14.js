const arr = [1, 2, 3];
const func = ([x, ...resto], y = [...resto, x]) => {
    return y;
};
console.log(func(arr));
// x = 1, resto = [2, 3]. o valor padrão de y usa essas variáveis 2, 3, 1
