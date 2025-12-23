const { Router } = require("express");
const router = Router();
const {
  getLivros,
  getLivroID,
  postLivro,
  patchLivro,
  deleteLivro,
} = require("../controladores/livro");

//Criação de uma rota
// Em resumo, a função do 'get' do express recebe uma  request ('req') e response ('res'). Request: É o que nos é mandado (pessoa que chama o nosso serviço manda uma request) e o que é devolvido para ela é a Response
router.get("/", getLivros);

router.get("/:id", getLivroID); //Get por ID, pegar apenas um livro especifico (id)

router.post("/", postLivro);

router.patch("/:id", patchLivro); //Patch por ID, modificar apenas um livro especifico (id), no Postman

router.delete("/:id", deleteLivro);

module.exports = router; //Será exportado o router para caso queira utilizar em outros arquivos (tipo export default no react)
