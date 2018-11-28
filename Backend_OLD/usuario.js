exports.servicoUsuario = function servicoUsuario(service, app, con, tabela) {
    //validar login
    app.route('/api/' + service + '/valida/:login,:senha').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE login = '" + req.params.login + "'";
        console.log(query);
        //-------------------base de dados-----------------
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                console.log(result[0].senha + req.params.senha);
                if (result[0].senha === req.params.senha) {
                    console.log(result[0].senha + req.params.senha);
                    res.send({ success: true, message: 'usuário válido' });
                }
                else {
                    res.send({ success: false, message: 'login ou senha inválido' });
                }
            });
        });
        con.end;
        //--------------------------------------------------
    });

    //buscar dados Usuario por id
    app.route('/api/' + service + '/get/:id').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE id = " + req.params.id;
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

    //inserir novo Usuario
    app.route('/api/' + service + '/insert/').post((req, res) => {
        var myobj = req.body;
        var query = "INSERT INTO " + tabela + " (login,senha,CEP,Email)" +
            "VALUES ('" + myobj.login + "','" + myobj.senha + "','" + myobj.cep + "','" + myobj.email + "')";
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

    //altera Usuario por id
    app.route('/api/' + service + '/update/:id').put((req, res) => {
        var query = "UPDATE " + tabela + " SET login = '" + req.body.login + "'," +
            "senha = '" + req.body.senha + "'," +
            "CEP = '" + req.body.cep + "'," +
            "Email = '" + req.body.email + "'" +
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
    //delete category;
    app.route('/api/' + service + '/remove/:id').delete((req, res) => {
        var query = "DELETE FROM " + tabela + " WHERE id = " + req.params.id;
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
