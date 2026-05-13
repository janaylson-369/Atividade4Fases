const usuario = {
    nome: "Carlos",
    habilidades: ["JS", "Python", "SQL"]
};
const { habilidades: [h1, , h3] } = usuario;
// acessa a array e pega o primeiro h1, pula o segundo e pega o terceiro h3 
console.log(h1, h3);