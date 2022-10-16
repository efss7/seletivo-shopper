<p id="voltar">
<a href="#sobre">Sobre</a> |
<a href="#tecnologias">Tecnologias</a> |
<a href="#linkApp">Link da Aplicação</a> |
<a href="#documentação">Documentação</a> |
<a href="#requisitos">Requisitos</a> |
<a href="#local">Rodando o projeto local</a> |
<a href="#desenvolvedor">Desenvolvedor</a>
</p>

<img width="300xp" src="https://user-images.githubusercontent.com/99001809/196015258-0c53369b-0fd1-4ee2-a113-7f8de125f8ee.png"/>

<h1 id="sobre">🛒 Projeto Shopper 🛍️</h1>

Uma aplicação **full-stack** desenvolvida para o processo seletivo da [Shopper](https://programada.shopper.com.br/shop-cn/). O **front-end** é um app **first mobile** desenvolvido em [React.JS](https://pt-br.reactjs.org/) com [JavaScript](https://www.javascript.com/) como linguagem principal. Também fiz a manipulação de alguns componentes do [Materia.Ui](https://mui.com/pt/). Já o **back-end** é uma API REST desenvolvida em [Node.JS](https://nodejs.org/en/) com [TypeScript](https://www.typescriptlang.org/) como linguagem principal, [MySql](https://www.mysql.com/) como banco de dados e [Jest](https://jestjs.io/pt-BR/) para os testes unitários da aplicação. O site tem como função mostrar uma lista de produtos que estão cadastrados no banco de dados, o usuário pode selecionar quais ele quer e a quantidade de cada um, no carrinho ele envia uma lista com os pedidos, seu nome e a data de entrega para o banco de dados.

<h2 id="tecnologias">🛠 Tecnologias ⬇️</h2>
<b> Front-End: </b>

- [JavaScript](https://www.javascript.com/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Material.Ui](https://mui.com/pt/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

<b> Back-End: </b>

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/docs/)
- [MySql](https://dev.mysql.com/doc/)
- [TypeORM](https://typeorm.io/)
- [Jest](https://jestjs.io/pt-BR/docs/api)

<h2 id="linkApp">🔗 Link da Aplicação</h2>

- [ShopperApp](http://efss-shopper.surge.sh/)

<h2 id="documentação">📃 Documentação da API no Postman</h2>

- [Postman](https://documenter.getpostman.com/view/20351432/2s83zjqNVd)

<h2 id="requisitos">Requisito atendidos ✔</h2>

- ✅ O sistema deve ter um formulário de cadastro de pedidos
- ✅ O usuário deve entrar com Nome do Cliente, Data de Entrega e uma lista de compras
- ✅ A lista de compras é composta por um ou mais produtos e a quantidade solicitada para cada um deles.
- ✅ O usuário pode alterar a quantidade de itens já cadastrados ou excluir um item que ele não queira mais.
- ✅ A cada alteração na lista de compras o sistema deve calcular o valor total do pedido.
- ✅ Todas essas informações devem ser salvas em um banco de dados que você vai modelar.
- ✅ Cada pedido salvo deve debitar a quantidade do produto correspondente de seu estoque.
- ✅ O sistema deve alertar o usuário caso a quantidade solicitada não esteja disponível no estoque.
- ✅ O sistema também deve ter uma função para mostrar o estoque atual exibindo: Nome do produto e a quantidade em estoque.


<h2 id="local"> 💻 Rodando o projeto na sua máquina</h2>

### Pré-Requisitos

- Um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
- Para fazer a instalação você vai precisar do [Node.JS](https://nodejs.org/en/download/)
- A instância de um banco de dados [MySQL](https://www.mysql.com/)


### Como instalar e rodar
* Para baixar o projeto
```
1. git clone https://github.com/efss7/seletivo-shopper.git

2. cd seletivo-shopper
```
* Para instalar e rodar o server (obrigatório)
```
3. cd server
4. npm install
```
5. Renomeie o arquivo ```.env.example```  para ```.env``` e preencha as variáveis com seus dados do banco de dados MySQL. É muito importante para a execução do servidor.
```
6. npx typeorm-ts-node-commonjs migration:run -d ./src/service/DataSource.ts
7. npm run dev
```

* Para rodar os testes unitários (opcional)
```
8. npm run test
```
* Para rodar a web (obrigatório) 
```
9. cd .. (para voltar um diretório)
10. cd web
11. npm install
12. npm run dev
```
Após rodar o último comando no seu terminal, ele irá retornar um link, é necessário que coloque ele no seu navegador ou clique aqui ➡️ http://127.0.0.1:5173/

<h2 id="screenshot">📸 Screenshot</h2>

<h4>A aplicação conta com 3 telas: ⬇️<h4>

- 1️⃣ RegisterPage
- 2️⃣ HomePage
- 3️⃣ CartPage

<div display="flex">
<img width="100xp" src="https://user-images.githubusercontent.com/99001809/196015782-89604659-81d6-4b07-b752-89361679cb6c.jpeg"/>
<img width="100xp" src="https://user-images.githubusercontent.com/99001809/196015596-b79e3810-0d3e-47b5-8864-5916330edaeb.jpeg"/>
<img width="100xp" src="https://user-images.githubusercontent.com/99001809/196016417-8c9579fc-e76c-4daa-8cc5-ced64bc0bb72.jpeg"/>

</div>


<h2 id="desenvolvedor">👨‍💻 Desenvolvedor</h2>


<table>
<td><a href="https://github.com/efss7"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/99001809?v=4" width="100px;" alt="Imagem profile Eric Silva desenvolvedor"/><br /><sub><b>Eric Silva </b></sub></a><br />
</table>

<a href="#voltar">Voltar para o topo ⬆️</a>
