exports.servicoBookdescription = function servicoBookdescription(service, app, con, tabela) {
    //buscar todos os dados bookdescription
    app.route('/api/' + service + '/get/all').get((req, res) => {
        var query = "SELECT * FROM " + tabela;
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
    //buscar dados bookdescription por isbn
    app.route('/api/' + service + '/getisbn/:isbn').get((req, res) => {
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
    //inserir nova bookdescription
    app.route('/api/' + service + '/insert/').post((req, res) => {
        var myobj = req.body;
        var query = "INSERT INTO " + tabela + " (title,description,price,publisher,pubdate,edition,pages)" +
            "VALUES ('" + myobj.title + "','" + myobj.description + "','" + myobj.price + "','" + myobj.publisher + "','" + myobj.pubdate + "','" + myobj.edition + "','" + myobj.pages + "')";
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

    //altera bookdescription por isbn
    app.route('/api/' + service + '/update/:isbn').put((req, res) => {
        var query = "UPDATE " + tabela + " SET title = '" + req.body.title + "'," +
            "description = '" + req.body.description + "'," +
            "price = '" + req.body.price + "'," +
            "publisher = '" + req.body.publisher + "'," +
            "pubdate = '" + req.body.pubdate + "'," +
            "edition = '" + req.body.edition + "'," +
            "pages = '" + req.body.pages + "'" +
            " WHERE ISBN = '" + req.params.isbn + "'";
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
    //delete bookdescription;
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
