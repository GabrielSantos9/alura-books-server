const fs = require("fs"); // manipular/ler arquivos do js

function getTodosFavoritos() {
  return JSON.parse(fs.readFileSync("favoritos.json")); //'readFileSync' = ler (read) arquivos e 'parse' = transforma em JSON
}

function deletaFavoritoID(id) {
  const favoritos = JSON.parse(fs.readFileSync("favoritos.json")); //'readFileSync' = ler (read) arquivos e 'parse' = transforma em JSON, acessa os arquivos de dentro do favoritos.json

  const livrosFiltrados = favoritos.filter((favorito) => favorito.id !== id); //Filtra os livros com id diferente do id requisitado e receba uma lista apenas com o livro deletado fora dela.
  fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados)); //Retona a nova lista já com o livro removido, foi passado o 'JSON.stringify' no livros filtrados para converter os itens para JSON.

  //Em geral, a função 'deletaFavoritoID(id)' cria um novo array chamado livrosFiltrados que contém todos os livros da lista de favoritos, exceto aquele cujo id corresponde ao id que você deseja remover, em resumo ele cria uma nova array e adiciona nela todos os id's diferentes do que foi requisitado, fazendo com que exlua esse id solicitado a exclusão.
}

function insereFavorito(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json")); //Fonte de dados livros.json
  const favoritos = JSON.parse(fs.readFileSync("favoritos.json")); //Fonte de dados favoritos.json

  const livroInserido = livros.find(livro => livro.id === id) //Find: encontrar elementos dentro de uma lista. Essa constante serve para encontrar livros iguais  ao id recebido, retornará o livro que será inserido
  const novaListaFavoritos = [...favoritos, livroInserido] //Junção da lista de favoritos anterior junto com o novo livro inserido
   fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos)); //Retona a nova lista já com o livro removido, foi passado o 'JSON.stringify' no livros filtrados para converter os itens para JSON.
}

module.exports = {
  getTodosFavoritos,
  deletaFavoritoID,
  insereFavorito,
};
