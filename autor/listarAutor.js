const {autores} = require("./autores");
function listarAutores (){
    autores.forEach(autor => {
        console.log(autor);
        });
    }

module.exports = {listarAutores };

// função substituindo o "=>"(retorna)

// function listarAutores (){
//     listarAutores.forEach(
        //    function retornarAutores (autor){}
        //    return autor;
