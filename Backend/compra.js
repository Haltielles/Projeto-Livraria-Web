exports.servicoCompra = function servicoCompra(service, app, con, tabela) {
    //buscar dados compra por id
    app.route('/api/' + service + '/get/:id').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE id_compra = " + req.params.id;
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
    //buscar dados compra por usuario id
    app.route('/api/' + service + '/getusuario/:id').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE id_usuario = " + req.params.id;
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
    //buscar dados compra por carrinho id
    app.route('/api/' + service + '/getcarrinho/:id').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE id_carrinho = " + req.params.id;
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
        var query = "INSERT INTO " + tabela + " (id_compra,id_usuario,id_carrinho,frete,valor total)" +
            "VALUES ('" + myobj.id_compra + "','" + myobj.id_usuario + "','" + myobj.id_carrinho + "','" + myobj.frete + "','" + myobj.valortotal + "')";
        console.log(query);
        //--------------------base de dados--------------
        con.connect(function (err) {
            if (err) throw err;
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

    //altera compra por id
    app.route('/api/' + service + '/update/:id').put((req, res) => {
        var query = "UPDATE " + tabela + " SET id_compra = '" + req.body.id_compra + "'," +
            "id_usuario = '" + req.body.id_usuario + "'," +
            "id_carrinho = '" + req.body.id_carrinho + "'," +
            "frete = '" + req.body.frete + "'," +
            "valor total = '" + req.body.valortotal + "'" +
            " WHERE id = '" + req.params.id + "'";
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
    //delete compra;
    app.route('/api/' + service + '/remove/:id').delete((req, res) => {
        var query = "DELETE FROM " + tabela + " WHERE id_compra = " + req.params.id;
        console.log(query);
        //--------------------base de dados---------------
        con.connect(function (err) {
            if (err) throw err;
            con.query(query, function (err, result) {
                if (err) throw err;
                console.log("Number of records deleted: " + result.affectedRows);
                res.send({ success: true, message: 'deletado com sucesso' });
            });
        });
        //--------------------------------------------
    });
}
