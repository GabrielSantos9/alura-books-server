//Importar o Express
const express = require("express"); //Função que cria um servidor Express
const app = express(); // Criou uma aplicação Express
const port = 8000; //Porta do site

//Criação de uma rota
// Em resumo, a função do 'get' do express recebe uma  request ('req') e response ('res'). Request: É o que nos é mandado (pessoa que chama o nosso serviço manda uma request) e o que é devolvido para ela é a Response
app.get('/', (req, res) => {
  res.send("Olá, mundo!");
}); // A '/' é o path e o 'req, res': requisição e response
 
//app.listen(...): Escutando as mensagens que ela recebe nessa porta '8000'
app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
