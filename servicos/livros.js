const fs = require("fs"); // manipular/ler arquivos do js

function getTodosLivros() {
  JSON.parse(fs.readFileSync("livros.json")); //'readFileSync' = ler (read) arquivos e 'parse' = transforma em JSON
}

module.exports = {
  getTodosLivros
};
