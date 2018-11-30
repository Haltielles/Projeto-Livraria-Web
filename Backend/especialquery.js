exports.especialQuery = function especialQuery(app, con) {
    //controle carrinho service retorna carrinho não vinculado a compra
    app.route('/api/livraria/carrinhoscompra/:id').get((req, res) => {
        var query = "SELECT a.id FROM carrinhos as a LEFT OUTER JOIN compras as b on ( a.id != b.id_carrinho ) WHERE a.usuario_id = " + req.params.id + " AND b.id_usuario = " + req.params.id;
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
    
    //buscar todos os livros 
    app.route('/api/livraria/allbooks').get((req, res) => {
        //pega todos os livros
        query = "SELECT * FROM `bookdescriptions`";
        console.log(query);
        var resquery = new Array();
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) throw err;
                resquery = result;
                console.log(resquery);
                //amontar array de authors por isbn
                var control = i = 0
                for (i = 0; i < resquery.length; i++) {
                    console.log(resquery[i].ISBN);
                    query = "SELECT a.AuthorID, a.nameF, a.nameL FROM bookauthors AS a LEFT OUTER JOIN bookauthorsbooks AS b on ( a.AuthorID = b.AuthorID ) WHERE b.ISBN = '" + resquery[i].ISBN + "'";
                    console.log(query);
                    if (err) console.log(err);
                    con.query(query, function (err, result, fields) {
                        if (err) console.log(err);
                        console.log(result);
                        console.log(control);
                        var aux = JSON.stringify(resquery[control]);
                        aux = aux.substr(0, aux.length - 1) + ",";
                        console.log(aux + '"authors":' + JSON.stringify(result) + "}");
                        resquery[control] = JSON.parse(aux + '"authors":' + JSON.stringify(result) + "}");
                        if (control == resquery.length - 1) {
                            res.send(resquery);
                        }
                        control++;
                    });
                }
            });
        });
        con.end;
        //--------------------------------------------------
    });
    //buscar todos os livros por titulo Haltielles
    app.route('/api/livraria/booktitle/:title').get((req, res) => {
        //pega todos os livros por categoria
        query = "SELECT * FROM bookdescriptions AS b WHERE b.title LIKE '%%" + req.params.title + "%%'";
        console.log(query);
        var resquery = new Array();
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) throw err;
                resquery = result;
                console.log(resquery);
                //amontar array de authors por isbn
                var control = i = 0
                for (i = 0; i < resquery.length; i++) {
                    console.log(resquery[i].ISBN);
                    query = "SELECT a.AuthorID, a.nameF, a.nameL FROM bookauthors AS a LEFT OUTER JOIN bookauthorsbooks AS b on ( a.AuthorID = b.AuthorID ) WHERE b.ISBN = '" + resquery[i].ISBN + "'";
                    console.log(query);
                    if (err) console.log(err);
                    con.query(query, function (err, result, fields) {
                        if (err) console.log(err);
                        console.log(result);
                        console.log(control);
                        var aux = JSON.stringify(resquery[control]);
                        aux = aux.substr(0, aux.length - 1) + ",";
                        console.log(aux + '"authors":' + JSON.stringify(result) + "}");
                        resquery[control] = JSON.parse(aux + '"authors":' + JSON.stringify(result) + "}");
                        if (control == resquery.length - 1) {
                            res.send(resquery);
                        }
                        control++;
                    });
                }
            });
        });
        con.end;
        //--------------------------------------------------
    }); 
    //buscar todos os livros por categoria DOMINGOS
    app.route('/api/livraria/bookcategorie/:id').get((req, res) => {
        //pega todos os livros por categoria
        query = "SELECT b.ISBN,b.title,b.description,b.price,b.publisher,b.pubdate,b.edition,b.pages FROM bookcategoriesbooks AS a LEFT OUTER JOIN bookdescriptions AS b on ( a.ISBN = b.ISBN ) WHERE a.CategoryID = " + req.params.id;
        console.log(query);
        var resquery = new Array();
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) throw err;
                resquery = result;
                console.log(resquery);
                //amontar array de authors por isbn
                var control = i = 0
                for (i = 0; i < resquery.length; i++) {
                    console.log(resquery[i].ISBN);
                    query = "SELECT a.AuthorID, a.nameF, a.nameL FROM bookauthors AS a LEFT OUTER JOIN bookauthorsbooks AS b on ( a.AuthorID = b.AuthorID ) WHERE b.ISBN = '" + resquery[i].ISBN + "'";
                    console.log(query);
                    if (err) console.log(err);
                    con.query(query, function (err, result, fields) {
                        if (err) console.log(err);
                        console.log(result);
                        console.log(control);
                        var aux = JSON.stringify(resquery[control]);
                        aux = aux.substr(0, aux.length - 1) + ",";
                        console.log(aux + '"authors":' + JSON.stringify(result) + "}");
                        resquery[control] = JSON.parse(aux + '"authors":' + JSON.stringify(result) + "}");
                        if (control == resquery.length - 1) {
                            res.send(resquery);
                        }
                        control++;
                    });
                }
            });
        });
        con.end;
        //--------------------------------------------------
    });    
    
    //buscar dados livro por isbn
    app.route('/api/livraria/bookdescribe/:isbn').get((req, res) => {
        var query = "SELECT * FROM bookdescriptions WHERE ISBN ='" + req.params.isbn + "'";
        var resquery;
        console.log(query);
        //-------------------base de dados-----------------
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) throw err;
                resquery = JSON.stringify(result);
                resquery = resquery.substr(1, resquery.length - 3) + ",";
            });
            query = "SELECT b.AuthorID,b.nameF,b.nameL FROM bookauthorsbooks AS a LEFT OUTER JOIN bookauthors AS b ON (a.AuthorID=b.AuthorID) WHERE a.ISBN = '" + req.params.isbn + "'";
            console.log(query);
            con.query(query, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                var autores = JSON.stringify(result);
                var resposta = JSON.parse(resquery + '"authors":' + autores + "}");
                res.send(resposta);
            });
        });
        con.end;
    });
    
    //buscar livros por author por id
    app.route('/api/livraria/bookauthor/:id').get((req, res) => {
        //pega todos os livros por categoria
        query = "SELECT b.ISBN,b.title,b.description,b.price,b.publisher,b.pubdate,b.edition,b.pages FROM bookauthorsbooks AS a LEFT OUTER JOIN bookdescriptions AS b on ( a.ISBN = b.ISBN ) WHERE a.AuthorID = " + req.params.id;
        console.log(query);
        var resquery = new Array();
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(query, function (err, result, fields) {
                if (err) throw err;
                resquery = result;
                console.log(resquery);
                //amontar array de authors por isbn
                var control = i = 0
                for (i = 0; i < resquery.length; i++) {
                    console.log(resquery[i].ISBN);
                    query = "SELECT a.AuthorID, a.nameF, a.nameL FROM bookauthors AS a LEFT OUTER JOIN bookauthorsbooks AS b on ( a.AuthorID = b.AuthorID ) WHERE b.ISBN = '" + resquery[i].ISBN + "'";
                    console.log(query);
                    if (err) console.log(err);
                    con.query(query, function (err, result, fields) {
                        if (err) console.log(err);
                        console.log(result);
                        console.log(control);
                        var aux = JSON.stringify(resquery[control]);
                        aux = aux.substr(0, aux.length - 1) + ",";
                        console.log(aux + '"authors":' + JSON.stringify(result) + "}");
                        resquery[control] = JSON.parse(aux + '"authors":' + JSON.stringify(result) + "}");
                        if (control == resquery.length - 1) {
                            res.send(resquery);
                        }
                        control++;
                    });
                }
            });
        });
        con.end;
        //--------------------------------------------------
    });
    
}

