# Comandos Sequelize

- dialect usado: "mariadb" 
    OBS. Caso use o MySQL ou Outro, é só alterar no diretório: \api\src\config

## Rodar o Projeto

- (1) npm i
- (2) Criar a Model Convidados:  npx sequelize-cli model:generate --name Convidados --attributes nome:string,acompanhanteAdulto:number,acompanhanteCrianca:number,codconvite:string 
- (3) Criar a Model Convite: npx sequelize-cli model:generate --name Convites --attributes codigo:string,usado:boolean
- (4) Criar a Model Usuários: npx sequelize-cli model:generate --name Usuarios --attributes nome:string,email:string,senha:string
- (5) Gerar as tabelas na base: npx sequelize-cli db:migrate
- (6) Gerar dados fake:  npx sequelize-cli seed:generate --name demo-convidados
- (7) Gerar dados fake:  npx sequelize-cli seed:generate --name demo-convite
- (8) Gerar dados fake:  npx sequelize-cli seed:generate --name demo-usuarios
- (9) Inserir os dados fake na base: npx sequelize-cli db:seed:all

### Cadastro de usuário: 

- path: '/usuarios'
  Method: POST
    Body: {
        "nome": "carlos",
        "email" : "carlos@gmail.com",
        "senha": "123456"
    }

#### Rotas:

- Inserir Convidados
    path: '/convidados'
    Method: 
        Body: {
            "nome": "rtj",
            "acompanhanteAdulto": 2,
            "acompanhanteCrianca": 1
        }

--------------------------------------------

- Listar Convidados
    path: '/convidados'
    Method: GET

--------------------------------------------

- Listar Convites
    path: '/convite'
    Method: GET
    
--------------------------------------------

- Listar Convites Ativos
    path: '/convite/ativo'
    Method: GET
    
--------------------------------------------

- Filtrar Convite pelo código
    path: '/convite/codigo/:codigo'
    Method: GET
    
--------------------------------------------

- Atualizar Status do Convite
    path: '/convite/:id'
    Method: PUT
    Body {
    "usado": true
    }
    
--------------------------------------------

- Autenticação
    path: '/auth/login'
    Method: POST
    Body {
    "email" : "carlos@gmail.com",
    "senha": "123456"
}
    
--------------------------------------------