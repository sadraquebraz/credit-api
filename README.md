# credit-api

## Variaveis de ambiente

File: `.env`

```
NODE_ENV=devolepment
PORT=expressPort
DB_USER=user
DB_PASS=password
DB_NAME=database
DB_HOST=host
DB_DIALECT=mysql
DB_OPERATORS_ALIASES=false
```

## Métodos HTTP

Os métodos HTTP devem ser utilizados de acordo com a definição padrão do [HTTP/1.1](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html).
Segue um exemplo de como os métodos HTTP devem ser utilizados nas operações de criar, recuperar, atualizar e deletar em um determinado contexto:

| MÉTODO HTTP | POST            | GET       | PUT         | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE          | READ      | UPDATE      | DELETE |
| /indicador  | Cria novos indicadores | Lista todos | Atualização em massa | Deleta todos |
| /indicador/1234  | Erro            | Lista pelo ID  | Atualiza se existir; se não, erro | Deleta pelo ID |

(Example from Web API Design, by Brian Mulloy, Apigee.)

## Recursos - API

### Indicadores

  - [POST /indicador](#post-conta)
  - [GET /indicador](#get-contas)
  - [GET /indicador/[id]](#get-contasid)
  - [PUT /indicador/[id]](#get-contasid)
  - [DELETE /indicador/[id]](#get-contasid)

#### POST /indicador

Corpo da requisição:

    {
        "origem": "CONTABIL"
        "tipo": "ATIVO",
        "descricao": "Caixa/Bancos"
    }

Corpo da resposta:

    {
        "id": 3
        "origem": "CONTABIL"
        "tipo": "ATIVO",
        "descricao": "Caixa/Bancos"
    }

#### GET /indicador

Corpo da resposta:

    [
      {
          "id": 1,
          "origem": "CONTABIL",
          "tipo": "ATIVO",
          "descricao": "Caixa/Bancos"
      },
      {
          "id": 3,
          "origem": "SAFRA",
          "tipo": "RENDIMENTOS",
          "descricao": "Rendimento Agrícola (ton/ha)"
      }
    ]

#### GET /indicador/[id]

Corpo da resposta:

    {
        "id": 1,
        "origem": "CONTABIL",
        "tipo": "ATIVO",
        "descricao": "Caixa/Bancos"
    }

#### PUT /indicador/[id]

Corpo da resposta:

    {
        "id": 1,
        "tipo": "ATIVO",
        "descricao": "Caixa/Bancos"
    }

