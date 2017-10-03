var database = require('./database');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: database.mysql_host,
  user: database.mysql_user,
  password: database.mysql_password,
  database: database.mysql_database
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});