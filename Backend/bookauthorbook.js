exports.servicoBookAuthorBook = function servicoBookAuthorBook(service, app, con, tabela) {
    //buscar dados bookautorbook por isbn
    app.route('/api/' + service + '/get/:isbn').get((req, res) => {
        var query = "SELECT * FROM " + tabela + " WHERE ISBN = " + req.params.isbn;
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
    //inserir novo bookauthorbook
    app.route('/api/' + service + '/insert/').post((req, res) => {
        var myobj = req.body;
        var query = "INSERT INTO " + tabela + " (ISBN,AuthorID) VALUES ('" + myobj.ISBN + "','" + myobj.AuthorID + "')";
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
    });
    //altera authorbook por isbn
    app.route('/api/' + service + '/update/:isbn').put((req, res) => {
        var query = "UPDATE " + tabela + " SET AuthorID = '" + req.body.AuthorID + "' WHERE ISBN = '" + req.params.isbn + "'";
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
    //delete bookauthorbook;
    app.route('/api/' + service + '/remove/:isbn').delete((req, res) => {
        var query = "DELETE FROM " + tabela + " WHERE ISBN = " + req.params.isbn;
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