const { Router } = require("express");
const router = Router()

//Criação de uma rota
// Em resumo, a função do 'get' do express recebe uma  request ('req') e response ('res'). Request: É o que nos é mandado (pessoa que chama o nosso serviço manda uma request) e o que é devolvido para ela é a Response
router.get('/', (req, res) => {
  try {
    res.send("Olá, mundo!");
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}); // A '/' é o path e o 'req, res': requisição e response

router.post('/', (req, res) => {
  res.send('Você fez uma requisição do tipo POST')
})

router.patch('/', (req, res) => {
  res.send('Você fez uma requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
  res.send('Você fez uma requisição do tipo DELETE')
})

module.exports = router //Será exportado o router para caso queira utilizar em outros arquivos (tipo export default no react)