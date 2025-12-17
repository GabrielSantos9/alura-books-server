const fs = require("fs") // manipular/ler arquivos do js
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json")) //'readFileSync' = ler (read) arquivos e 'parse' = transforma em JSON
const novoDado = {id: '3', nome: 'Livro mais que demais'}

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado])) //Inserir um dado (escrever - write) e adicionar um novo dado 'novoDado', logo, será mostrado os 'dadosAtuais' + o 'novoDado'. //JSON.stringify transforma em Texto

console.log(JSON.parse(fs.readFileSync("livros.json")));

//Após isso, digite no terminal 'node explicacoes.js'