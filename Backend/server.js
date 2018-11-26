const servBookCategory = require('./bookcategory');
//const servLivro = require('./usuario');
//const servEditora = require('./usuario');
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
const corsOptions = {//PARA RECEBER REQUISIÇOES APENAS DA APLICAÇÃO
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
const bodyParser = require('body-parser');//transforma JSON
app.use(bodyParser.json());
app.use(cors(corsOptions))

app.listen(8000, () => {//FICA AGUARDANDO REQUISIÇÕES
    console.log("servidor rodando");
    servBookCategory.servicoBookCategory("livraria", app, con, "bookcategories");
    //servUsuario.servicoUsuario("usuario",app,MongoClient,url,base,"usuarios");//CHAMA OS SERVIÇOS DE USUÁRIO
    //servLivro.servicoLivro("livro",app,MongoClient,url,base,"livros");//CHAMA OS SERVIÇOS DE Livro
    //servEditora.servicoEditora("editora",app,MongoClient,url,base,"editoras");//CHAMA OS SERVIÇOS DE Livro

});



