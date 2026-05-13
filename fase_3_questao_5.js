function teste({ x = 10, y = 20 } = {}) {
    console.log(x + y);
}
teste({ x: 5 });
// quando coloca x: 5, então ele substitui o 10, o 'y' não foi enviado, então usa o padrão 20