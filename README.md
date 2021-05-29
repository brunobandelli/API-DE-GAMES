# API-DE-GAMES
 ESTA API É UTILIZADA PARA LISTAR GAMES, CRIAR, EDITAR E DELETAR.
 (EXEMPLO DE DOCUMENTAÇÃO DE API)
 ## EndPoints
 ### GET /games
 Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados.
 #### Parametros
 Nenhum
 #### Respostas
 ##### OK! 200
 Caso essa resposta aconteça você vai receber a listagem de todos os games.
 
 Exemplo de resposta:
 ```
 
 [
    {
        "id": 23,
        "title": "Call Of Duty BO: II",
        "year": 2014,
        "price": 40
    },
    {
        "id": 65,
        "title": "GOD OF WAR",
        "year": 2010,
        "price": 50
    },
    {
        "id": 2,
        "title": "LEAGUE OF LEGENDS",
        "year": 2017,
        "price": 15
    }
 ]

 ```
 ##### Falha na Autenticação! 401
 Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token Inválido, Token Expirado.
 
 Exemplo de resposta
 
 ```
 
 {
    "token": "Token Inválido!"
 }
 
 ```

 ### POST /auth 
 Esse endpoint é responsável por fazer o processo de login.
 #### Parametros
 email: E-mail do usuário cadastrado no sistema.
 
 password: Senha do usuário cadastrado no sistema, com aquele determinado e-mail.
 
 Exemplo:
 ```
 {
    "email": "brunobandelli@tecnologyhub.com",
    "password": "nodejs<3"
 }
 ```
 
 #### Respostas
 ##### OK! 200
 Caso essa resposta aconteça você vai receber o token JWT para conseguir acessar endpoints protegidos na API
 
 Exemplo de resposta:
 ```
 {
      "token":                   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJicnVub2JhbmRlbGxpQHRlY25vbG9neWh1Yi5jb20iLCJpYXQiOjE2MjIwNzQyOTQsImV4cCI6MTYyMjI0NzA5NH0.tmUl_Y0mus_WzlSWN0wjLrQ2Px41hKRc-DlOojdsO7Y"
 }
 ```
 ##### Falha na Autenticação! 401
 Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Senha ou e-mail incorretos.
 
 Exemplo de resposta
 
 ```
 {
    err: "Credenciais Inválidas!"
 }
 ```

 
