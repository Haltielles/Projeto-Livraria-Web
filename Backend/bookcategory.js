exports.servicoBookCategory = function servicoBookCategory(service, app, con, tabela) {
  //buscar dados bookcategorie por id
  app.route('/api/' + service + '/getcategory/:id').get((req, res) => {
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
    //--------------------------------------------------
  });
}