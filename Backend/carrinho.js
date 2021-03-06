exports.servicoCarrinho = function servicoCarrinho(service, app, con, tabela) {
  //buscar dados carrinho por id
    app.route('/api/' + service + '/getmax/').get((req, res) => {
        var query = "SELECT MAX(id) AS id FROM " + tabela;
        console.log(query);
        //-------------------base de dados-----------------
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) console.log(err);
		var resposta = JSON.stringify(result);
		resposta = resposta.substring(1,resposta.length-1);
                console.log(resposta);
                res.send(JSON.parse(resposta));
            });
        });
        con.end;
        //--------------------------------------------------
    });  
  //buscar dados carrinho por id
    app.route('/api/' + service + '/get/:id').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE id = " + req.params.id;
        console.log(query);
        //-------------------base de dados-----------------
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) console.log(err);
                console.log(result);
                res.send(result);
            });
        });
        con.end;
        //--------------------------------------------------
    });
    //buscar dados carrinho por usuario isbn
    app.route('/api/' + service + '/getisbn/:id').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE ISBN = " + req.params.id;
        console.log(query);
        //-------------------base de dados-----------------
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                res.send(result);
            });
        });
        con.end;
        //--------------------------------------------------
    });
    //buscar dados carrinho por usuario id
    app.route('/api/' + service + '/getusuario/:id').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE usuario_id = " + req.params.id;
        console.log(query);
        //-------------------base de dados-----------------
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                res.send(result);
            });
        });
        con.end;
        //--------------------------------------------------
    });

    //inserir nova compra
    app.route('/api/' + service + '/insert/').post((req, res) => {
        var myobj = req.body;
        var query = "INSERT INTO " + tabela + " (id,ISBN,usuario_id,quantidade,valorunidade,titulo)" +
            " VALUES (" + myobj.id + ",'" + myobj.ISBN + "'," + myobj.usuario_id + "," + myobj.quantidade + "," + myobj.valorunidade + ",'" + myobj.titulo + "')";
        console.log(query);
        //--------------------base de dados--------------
        con.connect(function (err) {
            if (err) console.log(err);
            console.log("Connected!");
            con.query(query, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
                res.send({ success: true, message: 'inserido com sucesso' });
            });
        });
        con.end;
        //-----------------------------------------------
    });

    //altera carrinho por id
    app.route('/api/' + service + '/update/:id,:isbn').put((req, res) => {
        var query = "UPDATE " + tabela + " SET ISBN = '" + req.body.ISBN + "'," +
            "usuario_id = '" + req.body.usuario_id + "'," +
            "quantidade = '" + req.body.quantidade + "'," +
            "valorunidade = '" + req.body.valorunidade + "'" +
            " WHERE id = " + req.params.id + " AND ISBN = '" + req.params.isbn + "'";
        console.log(query);
        //--------------------base de dados---------
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
                res.send({ success: true, message: 'alterado com sucesso' });
            });
        });
        con.end;
        //-------------------------------------------------
    });
    //delete carrinho inteiro;
    app.route('/api/' + service + '/removecarrinho/:id').delete((req, res) => {
        var query = "DELETE FROM " + tabela + " WHERE id = " + req.params.id;
        console.log(query);
        //--------------------base de dados---------------
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result) {
                if (err) throw err;
                console.log("Number of records deleted: " + result.affectedRows);
                res.send({ success: true, message: 'deletado com sucesso' });
            });
        });
        //--------------------------------------------
    });
    //delete  item carrinho carrinho;
    app.route('/api/' + service + '/removeitemcarrinho/:id,:isbn').delete((req, res) => {
        var query = "DELETE FROM " + tabela + " WHERE id = " + req.params.id + " AND ISBN = '" + req.params.isbn + "'";
        console.log(query);
        //--------------------base de dados---------------
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result) {
                if (err) throw err;
                console.log("Number of records deleted: " + result.affectedRows);
                res.send({ success: true, message: 'deletado com sucesso' });
            });
        });
        //--------------------------------------------
    });
}
