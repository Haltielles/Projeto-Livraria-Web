exports.servicoBookCategoryBook = function servicoBookCategoryBook(service, app, con, tabela) {
    //buscar dados bookcategorybook por isbn
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

    //inserir novo bookcategorybook
    app.route('/api/' + service + '/insert/').post((req, res) => {
        var myobj = req.body;
        var query = "INSERT INTO " + tabela + " (CategoryID,ISBN) VALUES ('" + myobj.CategorieID + "','" + myobj.ISBN + "')";
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

    //altera categoria por isbn
    app.route('/api/' + service + '/update/:id').put((req, res) => {
        var query = "UPDATE " + tabela + " SET CategoryID = '" + req.body.CategoryID + "' WHERE ISBN = '" + req.params.ISBN + "'";
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
    //delete bookcategorybook;
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
