# alura-books-server
**Criando uma API com Express**

>[!IMPORTANT]
>**Observações:**

**`npm init`**
Inicia um novo pacote Node

**`npm install express`**
Instala uma dependência Express

**`npm install -g nodemon`**
Instala o pack nodemon, que a sua principal função nesse projeto server é não ficar precisando toda hora dar `node app.js` para atualizar o site

## Métodos HTTP:
>**GET**

>**POST**
>**PATCH**
>**DELETE**

| Método HTTP | Propósito                     | Operação CRUD | Descrição |
|-------------|-------------------------------|---------------|-----------|
| **GET**     | Recuperar dados               | Ler           | Solicita dados de um recurso específico no servidor. Este método não deve alterar os dados (é *seguro*) e pode ser armazenado em cache. |
| **POST**    | Enviar novos dados             | Criar         | Envia dados ao servidor para criar um novo recurso. Os dados são incluídos no corpo da requisição. Múltiplas requisições POST idênticas podem criar múltiplos recursos (não é *idempotente*). |
| **PATCH**   | Dados parcialmente atualizados | Atualizar     | Aplica modificações parciais a um recurso. É usado para atualizar campos específicos sem enviar a representação completa do recurso. |
| **DELETE**  | Remover dados existentes       | Excluir       | Remove o recurso especificado do servidor. Solicitações DELETE repetidas para o mesmo recurso têm o mesmo efeito que uma única solicitação (é *idempotente*). |
