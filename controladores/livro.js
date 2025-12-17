//Esse modulo foi criado na intenção de organização, igual do react

const {
  getTodosLivros,
  getLivroPorID,
  insereLivro,
  modificaLivro,
  deletarLivroPorId,
} = require("../servicos/livros");

// Em resumo, a função do 'get' do express recebe uma  request ('req') e response ('res'). Request: É o que nos é mandado (pessoa que chama o nosso serviço manda uma request) e o que é devolvido para ela é a Response
function getLivros(req, res) {
  //Busca todos os livros
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
} // A '/' é o path e o 'req, res': requisição e response

function getLivro(req, res) {
  //Buscar apenas um livro especifico pelo ID
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroPorID(id);
      res.send(livro);
      //Verifica se o id adicionado no link do site (http://localhost:8000/livros/'5') realmente é um número, caso não seja (http://localhost:8000/livros/'teste') retornará um erro informado que o id é válido.
    } else {
      res.status(422); //Informa que algum dado adicionado no link não é um dado consistente com o que a aplicação espera.
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  //Esse post serve para ser inserido um livro no JSON
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201); //Esse status diz que foi inserido um valor novo com sucesso
    res.send("Livro inserido com sucesso!");
  } catch (error) {
    res.status(500);
    res.send(error.message); //Exibe o erro
  }
}

function patchLivro(req, res) {
  //Modifica o nome do livro o qual é desejado modificar no Postman
  try {
    const id = req.params.id; //Pega o id do raq.params.id
    const body = req.body; //Pega o body do req.body

    if (id && Number(id)) {
      modificaLivro(body, id); //Chama a função modificaLivro e passará o body e id
      res.send("Item modificado com sucesso!");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message); //Exibe o erro
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deletarLivroPorId(id);
      res.send("livro deletado com sucesso");
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  //Mesma função do export default (react)
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
