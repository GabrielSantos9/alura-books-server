const fs = require("fs"); // manipular/ler arquivos do js

function getTodosLivros() {
  const livroGerais = JSON.parse(fs.readFileSync("livros.json")); //'readFileSync' = ler (read) arquivos e 'parse' = transforma em JSON
  return livroGerais; //Retorna todos os livros do livro.json
}

function getLivroPorID(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json")); //'readFileSync' = ler (read) arquivos e 'parse' = transforma em JSON
  const livroFiltrado = livros.filter((livro) => livro.id === id)[0]; //Esse filtro passará livro por livro no JSON para ver qual é o solicitado (pelo id) até chegar no livro onde o id é o mesmo do solicitado, por ex: o cliente deseja o livro do id 3, logo, vou procurar pelo livro do id 3, no JSON. o [0] é por conta que o livro filtrado pelo id sempre será o único achado naquele id e a indice dele passa a ser 0, por ser único.
  return livroFiltrado; //Retorna o livro encontrato por ex: encontrou o { "id": "3", "nome": "Livro mais que demais 2" }
}

function insereLivro(livroNovo) {
  //Essa função serve para inserir um livro novo
  const livros = JSON.parse(fs.readFileSync("livros.json")); //'readFileSync' = ler (read) arquivos e 'parse' = transforma em JSON

  const novaListaDeLivros = [...livros, livroNovo];

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros)); //JSON.stringify: transforma em texto, logo, a novaListaDeLivros será transformada em texto
} //Após isso, para inserir o arquivo no JSON vá no Postman, mude para POST e adicione o link http://localhost:8000/livros/, após isso clique em "body", selecione "raw" e coloque a opção 'JSON', depois é apenas clicar em 'Send' e ver se vai dar o status 201 (

function modificaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id); //Indice do que queremos modificar. O 'findIndex()' é uma função das Arrays que passa uma combinação e vai te devolver um indice do que ele vai encontrar, por exemplo, quero encontrar o indice do item da lista que tem o '"id": "2"', esse findIndex é o responsável por procurar e com ele também seguiremos fazendo o resto do processo, que seria modificar essa indice.

  const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }; //É responsável por pegar os livrosAtuais no indice que acabamos de procurar e as modificações que nós temos, teremos que fazer uma verificação de quem que está diferente entre eles e adicionar esses campos que foram modificados.

  //Explicação:
  //(1) LivroAtuais[indiceModificado] -> {id: "2", nome: "livro irado"}
  //(2) modificacoes -> {nome: "nome mucho legal" }

  //(1) - Ele verifica todos os campos do objeto ({id: "2", nome: "livro irado"}) e cria um objeto, após isso ele analisa o (2) e verifica se já há um "nome", caso haja, ele vai modificar esse nome para o nome do objeto modificações ({nome: "nome mucho legal"}), logo o nome passará de "livro irado" para "nome mucho legal"

  //O '{...livrosAtuais[indiceModificado] }' criará um objeto novo com todos os campos que existem nos livrosAtuais no indiceModificado.

  livrosAtuais[indiceModificado] = conteudoMudado; //O 'livroAtuais[indiceModificado]' passará a ser 'conteudoMudado', logo, no indice que desejo mudar, o novo valor dele vai passar a ser 'conteudoMudado' e assim será editado o 'const conteudoMudado' com apenas o que é desejado modificar.

  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais)); //"livros.json": é o que desejamos modificar e será passado o "livrosAtuais" para ele. JSON.stringify: transforma em texto
}
//Todas as vezes anteriores foi usado 'const', mas dessa vez será usado o let, pois diferente da 'const' o 'let' permite modificar a variavel.

//'writeFileSync' pega os dados (no caso, a lista de livros atualizada) e os escreve no arquivo especificado, substituindo o conteúdo anterior por es

function deletarLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados = livros.filter( livro => livro.id!== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados)) //Mostra a nova lista do 'livrosFiltrados'

    //'livrosFiltrados': Esta é uma nova variável que armazenará o resultado do filtro. Ela conterá apenas os livros que atendem a uma determinada condição.

    //Está dando erro, verificar
}
module.exports = {
  getTodosLivros,
  getLivroPorID,
  insereLivro,
  modificaLivro,
  deletarLivroPorId,
};
