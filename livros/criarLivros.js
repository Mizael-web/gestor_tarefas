const {livros} = require("./livros");

function criarLivros(titulo, autor, isbn) {
   const novoLivros = {titulo, autor, isbn };
   livros.push(novoLivros);
}

module.exports = { 
    criarLivros 
    };