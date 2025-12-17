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
    const livro = getLivroPorID(id);
    res.send(livro);
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

    modificaLivro(body, id); //Chama a função modificaLivro e passará o body e id
    res.send("Item modificado com sucesso!");
  } catch (error) {
    res.status(500);
    res.send(error.message); //Exibe o erro
  }
}

// function deleteLivro(req, res) {
//   //Modifica o nome do livro o qual é desejado modificar no Postman
//   try {
//     const id = req.params.id; //Pega o id dos parâmetros raq.params.id
//     excluirLivro(id); //Enviar para uma função do serviço 'excluirLivro(id)'
//     res.send("Livro deletado com sucesso!")
//   } catch (error) {
//     res.status(500);
//     res.send(error.message); //Exibe o erro
//   }
// }

function deleteLivro(req, res) {
    try {
        const id = req.params.id
        deletarLivroPorId(id)
        res.send("livro deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
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
