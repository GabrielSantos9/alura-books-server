//Importar o Express
const express = require("express"); //Função que cria um servidor Express
const rotaLivro = require("./rotas/livro")
const rotaFavoritos = require("./rotas/favoritos");
const app = express(); // Cria uma aplicação Express
const port = 8000; // Porta do site
const cors = require("cors") //Importar o CORS, que é um mecanismo que permite que recursos restritos em uma página da web sejam solicitados a partir de outro domínio fora do domínio ao qual o recurso pertence.

app.use(express.json()) //Significa que a nossa aplicação aceita receber body do tipo JSON, ela consegue ler. Com ela agora é possível adicionar um livro no json
app.use(cors({origin: "*"})) //Utilizado para que permita que seja feito requisições e responses. Obs: esse código tem que ficar antes do 'app.use('/livros', rotaLivro)', se não da erro
app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavoritos);
 
//app.listen(...): Escutando as mensagens que ela recebe nessa porta '8000'
app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
