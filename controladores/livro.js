//Esse modulo foi criado na intenção de organização, igual do react

// Em resumo, a função do 'get' do express recebe uma  request ('req') e response ('res'). Request: É o que nos é mandado (pessoa que chama o nosso serviço manda uma request) e o que é devolvido para ela é a Response

function getLivros (req, res) {
  try {
    res.send("Olá, mundo!");
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
} // A '/' é o path e o 'req, res': requisição e response

module.exports = { //Mesmo função do export default (react)
  getLivros 
}