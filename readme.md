# ---API UTILIZADA EXCLUSIVAMENTE PARA O PROJETO OWLS BAR---
# LINK CORRETO DA API --> https://github.com/lelaranja/APIRest_Pub

# 🍻 API REST - PUB

Projeto educacional de finalização do Módulo IV do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/).

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). Como banco de dados, foi utilizado o SQLite.

# Tabela de conteúdos

<!--ts-->

- [Pré-requisitos](#-pré-requisitos)
- [Packages](#-packages)
- [Instalação](#-instalação-da-aplicação)
- [Inicializando banco de dados](#%EF%B8%8F-inicializando-o-banco-de-dados)
- [Testes](#bug-testes)
- [Rotas](#%EF%B8%8F-rotas)
- [Hospedagem no Heroku](#-link-do-heroku)
- [Desenvolvido por](#-desenvolvido-por)
<!--te-->

## 📚 Pré-requisitos

- Node.js v.16.15.1
- NPM v.8.11.0

## 📦 Packages

- <a href="https://nodejs.org/en/">Node.Js</a>
- <a href="https://www.npmjs.com/">NPM</a>
- <a href="https://expressjs.com/pt-br/">Express</a>
- <a href="https://www.npmjs.com/package/sqlite3">SQLite</a>
- <a href="https://nodemon.io/">Nodemon</a>
- <a href="https://www.npmjs.com/package/jest">Jest</a>
- <a href="https://www.npmjs.com/package/supertest">Supertest</a>
- <a href="https://www.npmjs.com/package/cors">Cors</a>

## 📥 Instalação da aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/lelaranja/APIRest_Pub.git
```

Entrando na pasta:

```
cd APIRest_Pub
```

Instalando apenas pacotes necessários para funcionamento da API:

```
npm i --production
```

Instalando todos os pacotes:

```
npm install
```

Rodando o projeto:

```
npm start
```

## 🗂️ Inicializando o banco de dados

Para iniciar um banco de dados novo com os dados padrão, delete o arquivo `database.db` e rode o comando abaixo:

```
npm run db
```

## :bug: Testes


Necessária a instalação de todas as dependências para o funcionamento.

```
npm test
```

## 🏎️ Rotas

### Restrição de acessos

#### Utilização do Header (User)

- Rota GET

  Não é necessária autenticação

- Rotas POST/PUT

  É necessário uma autenticação de key = user, podendo ser o value = 'sub' ou value = 'admin'

- Rota DELETE

  É necessário uma autenticação de key = user e value = 'admin'

### Cliente

- **GET /client**

  Esquema da resposta

  ```json
  {
  "msg": "Aqui estão seus dados",
  "dados": [
  	{
  		"id": 1,
  		"nome": "Gilson",
  		"telefone": "2198744523",
  		"email": "gilsons_drinks@mail.com"
  	}
  ```

- **GET /client/nome/:nome**

  Esquema da resposta

  ```json
  {
    "msg": "Aqui estão seus dados",
    "dados": {
      "id": 2,
      "nome": "Josélia",
      "telefone": "2196654721",
      "email": "joselialima@mail.com"
    }
  }
  ```

- **POST /client**

  Esquema da requisição

  ```json
  {
    "nome": "Sabrina",
    "telefone": "1196454756",
    "email": "sabrinadev@devmail.com"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "dados inseridos com sucesso",
    "dados": {
      "nome": "Sabrina",
      "telefone": "1196454756",
      "email": "sabrinadev@devmail.com"
    }
  }
  ```

- **PUT /client/nome/:nome**

  Esquema da requisição

  ```json
  {
    "nome": "Letícia",
    "telefone": "1198762345",
    "email": "leledev@devmail.com"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Dados atualizados com sucesso"
  }
  ```

- **DELETE /client/nome/:nome**

  Esquema da resposta

  ```json
  {
    "msg": "Dados deletados com sucesso onde nome = Letícia"
  }
  ```

### Funcionário

- **GET /staff**

  Esquema da resposta

  ```json
  {
    "msg": "Aqui estão seus dados",
    "dados": [
        {
            "id": 1,
            "nome": "Leovegildo Moura",
            "cpf": "23912345014",
            "datadenascimento": "10/04/2000"
        },
  ```

- **GET /staff/nome/:nome**

  Esquema da resposta

  ```json
  {
    "msg": "Aqui estão seus dados",
    "dados": {
      "id": 1,
      "nome": "Leovegildo Moura",
      "cpf": "23912345014",
      "datadenascimento": "10/04/2000"
    }
  }
  ```

- **POST /staff**

  Esquema da requisição

  ```json
  {
    "nome": "Rodrigo Erik",
    "cpf": "34576890234",
    "datadenascimento": "20/05/1998"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "dados inseridos com sucesso",
    "dados": {
      "nome": "Rodrigo Erik",
      "cpf": "34576890234",
      "datadenascimento": "20/05/1998"
    }
  }
  ```

- **PUT /staff/nome/:nome**

  Esquema da requisição

  ```json
  {
    "nome": "Willian Igor",
    "cpf": "40567890234",
    "datadenascimento": "10/02/1995"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Dados atualizados com sucesso"
  }
  ```

- **DELETE /staff/nome/:nome**

  Esquema da resposta

  ```json
  {
    "msg": "Dados deletados com sucesso onde nome = Willian Igor"
  }
  ```

### Cardápio

- **GET /menu**

  Esquema da resposta

  ```json
  {
  "msg": "Aqui estão seus dados",
  "dados": [
  	{
  		"id": 1,
  		"produto": "Calabresa acebolada",
  		"valor": 25,
  		"descricao": "Uma porçao de 400 gramas de calabresa com cebola frita"
  	},
  ```

- **GET /menu/produto/:produto**

  Esquema da resposta

  ```json
  {
    "msg": "Aqui estão seus dados",
    "dados": {
      "id": 2,
      "produto": "Calabresa acebolada",
      "valor": 25,
      "descricao": "Uma porçao de 400 gramas de calabresa com cebola frita"
    }
  }
  ```

- **POST /menu**

  Esquema da requisição

  ```json
  {
    "produto": "Mojito",
    "valor": 25,
    "descricao": "coquetel à base de rum branco originário de Cuba"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "dados inseridos com sucesso",
    "dados": {
      "produto": "Mojito",
      "valor": 25,
      "descricao": "coquetel à base de rum branco originário de Cuba"
    }
  }
  ```

- **PUT /menu/produto/:produto**

  Esquema da requisição

  ```json
  {
    "produto": "Tequila",
    "valor": 15,
    "descricao": "Dose de 10 ml da Tequila José Cuervo"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Dados atualizados com sucesso"
  }
  ```

- **DELETE /menu/produto/:produto**

  Esquema da resposta

  ```json
  {
    "msg": "Dados deletados com sucesso onde produto = Tequila"
  }
  ```

### Estoque

- **GET /storage**

  Esquema da resposta

  ```json
  {
  "msg": "Aqui estão seus dados",
  "dados": [
  	{
  		"id": 1,
  		"fabricante": "Ambev",
  		"qtdProdutos": 150,
  		"nomeProduto": "Antarctica"
  	}
  ```

- **GET /storage/nomeProduto/:nomeProduto**

  Esquema da resposta

  ```json
  {
    "msg": "Aqui estão seus dados",
    "dados": {
      "id": 2,
      "fabricante": "GrupoPetropolis",
      "qtdProdutos": 2,
      "nomeProduto": "Itaipava"
    }
  }
  ```

- **POST /storage**

  Esquema da requisição

  ```json
  {
    "fabricante": "Seara",
    "qtdProdutos": 90,
    "nomeProduto": "Calabresa"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "dados inseridos com sucesso",
    "dados": {
      "fabricante": "Seara",
      "qtdProdutos": 90,
      "nomeProduto": "Calabresa"
    }
  }
  ```

- **PUT /storage/nomeProduto/:nomeProduto**

  Esquema da requisição

  ```json
  {
    "fabricante": "Sadia",
    "qtdProdutos": 80,
    "nomeProduto": "Calabresa"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Dados atualizados com sucesso"
  }
  ```

- **DELETE /storage/nomeProduto/:nomeProduto**

  Esquema da resposta

  ```json
  {
    "msg": "Dados deletados com sucesso onde produto = Calabresa"
  }
  ```

### Fornecedor

- **GET /suppliers**

  Esquema da resposta

  ```json
  {
    "msg": "Aqui estão seus dados",
    "dados": [
        {
            "id": 1,
            "nome": "Friboi",
            "telefone": "1145236984",
            "cnpj": "12345678956111",
            "produto": "carne"
        },
  ```

- **GET /suppliers/cnpj/:cnpj**

  Esquema da resposta

  ```json
  {
    "msg": "Aqui estão seus dados",
    "dados": {
      "id": 1,
      "nome": "Friboi",
      "telefone": "1145236984",
      "cnpj": "12345678956111",
      "produto": "carne"
    }
  }
  ```

- **POST /suppliers**

  Esquema da requisição

  ```json
  {
    "nome": "Quitanda Fukushima",
    "telefone": "11458781116",
    "cnpj": "32678912341518",
    "produto": "vegetais,legumes"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "dados inseridos com sucesso",
    "dados": {
      "nome": "Quitanda Fukushima",
      "telefone": "1145878156",
      "cnpj": "326789123458",
      "produto": "vegetais,legumes"
    }
  }
  ```

- **PUT /suppliers/cnpj/:cnpj**

  Esquema da requisição

  ```json
  {
    "nome": "Quitanda Fukushima",
    "telefone": "11458781116",
    "cnpj": "32678912341518",
    "produto": "carne"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Dados atualizados com sucesso"
  }
  ```

- **DELETE /suppliers/cnpj/:cnpj**

  Esquema da resposta

  ```json
  {
    "msg": "Dados deletados com sucesso onde CNPJ = 32678912341518"
  }
  ```

### Transação

- **GET /transactions**

  Esquema da resposta

  ```json
  {
    "msg": "Aqui estão seus dados",
    "dados": [
        {
            "id": 1,
            "funcionario": "Anakin Skywalker",
            "valorCompra": 70,
            "produtos": "Cerveja 600ml, porção de calabresa",
            "data": "Fri Aug 05 2022 17:55:53 GMT-0300 (Horário Padrão de Brasília)"
        }
  ```

- **GET /transactions/id/:id**

  Esquema da resposta

  ```json
  {
    "msg": "Aqui estão seus dados",
    "dados": {
      "id": 1,
      "funcionario": "Kleberr Knob",
      "valorCompra": 50,
      "produtos": "Drink de fogo, Caninha da serra, Batata gourmet",
      "data": "Thu Aug 04 2022 00:40:18 GMT-0300 (Horário Padrão de Brasília)"
    }
  }
  ```

- **POST /transactions**

  Esquema da requisição

  ```json
  {
    "funcionario": "Anakin Skywalker",
    "produtos": "Cerveja 600ml, porção de calabresa, amendoim 60g",
    "valorCompra": 80
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "dados inseridos com sucesso",
    "dados": {
      "funcionario": "Anakin Skywalker",
      "produtos": "Cerveja 600ml, porção de calabresa, amendoim 60g",
      "valorCompra": 80,
      "data": "Fri Aug 05 2022 17:55:21 GMT-0300 (Horário Padrão de Brasília)"
    }
  }
  ```

- **PUT /transactions/id/:id**

  Esquema da requisição

  ```json
  {
    "funcionario": "Anakin Skywalker",
    "produtos": "Cerveja 600ml, porção de calabresa",
    "valorCompra": 70
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Dados atualizados com sucesso"
  }
  ```

- **DELETE /transactions/id/:id**

  Esquema da resposta

  ```json
  {
    "msg": "Dados deletados com sucesso onde ID = 4"
  }
  ```

### ERROS GERAIS

Esquema da resposta

- Busca por dado não cadastrado

```json
{
  "msg": "Dados não encontrados"
}
```

- Post com dados faltantes

```json
{
  "msg": "Parece que faltam alguns dados em sua requisição"
}
```

- Post/Put com dados incorretos

```json
{
  "msg": "Alguns dados estão preenchidos incorretamente"
}
```

- Post/Put com user diferente de "admin" ou "sub"

```json
{
  "msg": "Usuario não autenticado"
}
```

- Delete com user diferente de "admin"

```json
{
  "msg": "Usuario não autenticado"
}
```


## 🔌 Link do Heroku

<a href="https://apirest-pub.herokuapp.com/">apirest-pub</a>

## 🤓 Desenvolvido por

<table align='center'>
  <tr>
    <td align="center"><a href="https://github.com/lelaranja"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/93409210?v=4" width="100px;" alt=""/><br /><sub><b>Letícia Laranja</b></sub></a><br /><a href="https://github.com/lelaranja" title="Letícia">🥤</a></td>
    <td align="center"><a href="https://github.com/Digoassun"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102702258?v=4" width="100px;" alt=""/><br /><sub><b>Rodrigo Assunção</b></sub></a><br /><a href="https://github.com/Digoassun" title="Rodrigo">🍹</a></td>
    <td align="center"><a href="https://github.com/igorsans"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98533716?v=4" width="100px;" alt=""/><br /><sub><b>Igor Santos</b></sub></a><br /><a href="https://github.com/igorsans" title="Igor">🍺</a></td>
     <td align="center"><a href="https://github.com/guimaraesadev"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101408372?v=4" width="100px;" alt=""/><br /><sub><b>Sabrina Guimarães</b></sub></a><br /><a href="https://github.com/guimaraesadev" title="Sabrina">🍸</a></td>
       <td align="center"><a href="https://github.com/SGErik"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102768866?v=4" width="100px;" alt=""/><br /><sub><b>Erik Souza</b></sub></a><br /><a href="https://github.com/SGErik" title="Erik">🍷</a></td>
    <td align="center"><a href="https://github.com/willcrvlh"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101817310?v=4" width="100px;" alt=""/><br /><sub><b>Willian Carvalho</b></sub></a><br /><a href="https://github.com/willcrvlh" title="Willian">🧉</a></td>
  </tr>
