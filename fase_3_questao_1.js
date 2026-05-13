const usuario = { nome: "Ana", idade: 28, cidade: "SP" };
const { nome, ...resto } = usuario;
console.log(nome, resto);
// o nome é extraído, e o ...resto cria um novo objeto com o que sobrou