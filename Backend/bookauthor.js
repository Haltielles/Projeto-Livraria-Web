exports.servicoBookauthor = function servicoBookauthor(service, app, con, tabela) {
    //buscar dados author por id
    app.route('/api/' + service + '/getisbn/:id').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE AuthorID = " + req.params.id;
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
    //inserir nova author
    app.route('/api/' + service + '/insert/').post((req, res) => {
        var myobj = req.body;
        var query = "INSERT INTO " + tabela + " (nameF,nameL)" +
            "VALUES ('" + myobj.strFName + "','" + myobj.strLName + "')";
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

    //altera author por id
    app.route('/api/' + service + '/update/:isbn').put((req, res) => {
        var query = "UPDATE " + tabela + " SET nameF = '" + req.body.strFName + "'," +
            "nameL = '" + req.body.strFName + "'" +
            " WHERE AuthorID = '" + req.params.AuthorID + "'";
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
    //delete author;
    app.route('/api/' + service + '/remove/:id').delete((req, res) => {
        var query = "DELETE FROM " + tabela + " WHERE ISBN = " + req.params.id;
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
