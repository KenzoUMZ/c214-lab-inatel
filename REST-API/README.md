# API REST em JavaScript
## Esta API faz conexão com o banco de dados relacional MongoDB
### Ferramentas Utilizadas: Visual Studio Code, Node, Postman, MongoDB(web).
### Bibliotecas utilizadas

- jest
- express
- cors
- http-status-codes
- validate.js
- mongoose
- uuid
## Arquivos do projeto
*music_service.js* : É a classe que possui os métodos para realizar as operação no DB.  
*database.js* : Classe responsável po criar um esquema e realizar a conexão através da String de conexão.  
*rest_server.js* : Exporta as funções para fazer leitura de um JSON.  
*music_api.js* : Realiza as operações com a web
*Constants.js* : Carrega Strings de mensagens de erro do MongoDB.  
*music_validation.js*: Realiza a verificação de tipos dos argumentos que serão enviados para o DB.  
*status-code.js*: Carrega as mensagens de status HTTP.  
*validation.js*: Carrega a lib de verificação de tipos.  
