const pessoas = [{ nome: 'Ana', cidade: 'SP' }, { nome: 'Lucas', cidade: 'RJ' }, {
    nome: 'Bruna',
    cidade: 'SP'
}, { nome: 'Caio', cidade: 'MG' }];
/**agrupar elementos de um array de objetos pela propriedade 'cidade' 
usando apenas métodos de array: */
//resposta

const agrupar = pessoas.reduce((ac, pessoa) => {
    const {cidade } = pessoa;
    return {...ac, [cidade]: (ac[cidade] || []).concat(pessoa) };
    }, {}
);
console.log(agrupar);