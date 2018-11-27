const servBookCategory = require('./bookcategory');
const servBookDescription = require('./bookdescription');
const servBookAuthor = require('./bookauthor');
const servBookAuthorBook = require('./bookauthorbook');
const servBookCategoryBook = require('./bookcategoriebook')
const servUsuario = require('./usuario');
const servCompra = require('./compra');
const servCarrinho = require('./carrinho');
const servEmailSender = require('./emailsender')
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "phpmyadmin",
    password: "root",
    database: "sandvigbookstore"
});
con.end;
const corsOptions = {//PARA RECEBER REQUISIÇOES APENAS DA APLICAÇÃO
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
const bodyParser = require('body-parser');//transforma JSON
app.use(bodyParser.json());
//app.use(cors(corsOptions))

app.listen(8000, () => {//FICA AGUARDANDO REQUISIÇÕES
    console.log("servidor rodando");
    servBookCategory.servicoBookCategory("livraria/bookcategory", app, con, "bookcategories");
    servUsuario.servicoUsuario("livraria/usuario", app, con, "usuarios");
    servCompra.servicoCompra("livraria/compra", app, con, "compras");
    servCarrinho.servicoCarrinho("livraria/carrinho", app, con, "carrinhos");
    servBookDescription.servicoBookdescription("livraria/bookdescription", app, con, "carrinhos"); 
    servBookAuthor.servicoBookauthor("livraria/bookauthor", app, con, "bookauthors"); 
    servBookCategoryBook.servicoBookCategoryBook("livraria/bookcategorybook", app, con, "bookcategoriesbooks");
    servBookAuthorBook.servicoBookAuthorBook("livraria/bookauthorbook", app, con, "bookauthorsbooks");
    servEmailSender.emailSender(app,nodemailer);
});



