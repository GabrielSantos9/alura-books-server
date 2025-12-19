//Esse modulo foi criado na intenção de organização, igual do react

const {
  getTodosLivros,
  getLivroPorID,
  insereLivro,
  modificaLivro,
  deletarLivroPorId,
} = require("../servicos/livros");
const fs = require("fs"); // manipular/ler arquivos do js

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
  const arrayLivros = [
    { id: "1", nome: "Livro Iradissimo" },
    { id: "2", nome: "Livro mucho legal" },
    { id: "3", nome: "Livro mais que demais 2" },
    { id: "4", nome: "Livro irado menos irado que o outro" },
    { id: "5", nome: "Livro mais lindo do mundo" },
    { id: "6", nome: "Livro iradíssimo mais que demais" },
  ];

  try {
    const id = Number(req.params.id);

    //Busca o livro pelo id
    const livro = arrayLivros.find((livro) => Number(livro.id) === id);

    //Valida se é número
    if (Number.isNaN(id)) {
      return res.status(422).send("ID inválido");
    }

    //Informa que o id informado na requisição (usuario) não foi encontrado na array
    if (!livro) {
      return res.status(404).send("Livro não encontrado");
    }

    //Caso passe por todas as validações e encontre o id na array
    return res.status(200).json(livro);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

function postLivro(req, res) {
  //Esse post serve para ser inserido um livro no JSON
  try {
    const livroNovo = req.body;
    if (req.body.id && req.body.nome) {
      //Verifica se na hora de adicionar um novo livro há tanto o 'id' quanto o 'nome'
      insereLivro(livroNovo);
      res.status(201); //Esse status diz que foi inserido um valor novo com sucesso
      res.send("Livro inserido com sucesso!");
    } else {
      res.status(422);
      res.send(
        "O livro enviado não possui as mesmas propriedades dos livros do aplicativo, que são: 'nome' e 'id'."
      );
    }
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
