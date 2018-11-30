exports.servicoBookCategory = function servicoBookCategory(service, app, con, tabela) {
  //buscar dados bookcategory por id
  app.route('/api/' + service + '/get/:id').get((req, res) => {
    var query = "SELECT * FROM " + tabela + " WHERE CategoryID = " + req.params.id;
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
  app.route('/api/' + service + '/getall').get((req, res) => {
    
    var query = "SELECT a.CategoryID, a.CategoryName FROM bookcategories AS a INNER JOIN bookcategoriesbooks AS b ON ( a.CategoryID = b.CategoryID ) GROUP BY a.CategoryID";
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
  //inserir novo bookcategory
  app.route('/api/' + service + '/insert/').post((req, res) => {
    var myobj = req.body;
    var query = "INSERT INTO " + tabela + " (CategoryName) VALUES ('" + myobj.CategoryName + "')";
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

//buscar todos bookcategory 
  app.route('/api/' + service + '/getall').get((req, res) => {
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
  
  //altera categoria por id
  app.route('/api/' + service + '/update/:id').put((req, res) => {
    var query = "UPDATE " + tabela + " SET CategoryName = '" + req.body.CategoryName + "' WHERE CategoryID = '" + req.params.id + "'";
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
    var query = "DELETE FROM " + tabela + " WHERE CategoryID = " + req.params.id;
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
