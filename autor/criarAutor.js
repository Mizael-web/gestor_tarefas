const {autores} = require("./autores");

function criarAutor(nome, email){
   const novoAutor = {nome, email };
   autores.push(novoAutor);
};
//criarAutor("Mizael", "mizaelmendes@gmail.com");

module.exports = {criarAutor };
