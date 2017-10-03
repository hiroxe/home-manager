var mysql = require('mysql');
var database = require('../config/database');

var con = mysql.createConnection({
    host: database.mysql_host,
    user: database.mysql_user,
    password: database.mysql_password,
    database: database.mysql_database
});

get = function (table, params, callback) {
    var out = null;

    if (table) {
        var sql = "SELECT * FROM " + table + " ";
        async.series([
            function contructSql(_callback) {
                if (Object.keys(params).length > 0) {
                    sql += " WHERE "
                    for (var i = 0; i > Object.keys(params).length; i++) {
                        if (i != 0) {
                            sql += " AND ";
                        }
                        sql += Object.keys(params)[i] + "'" + params[Object.keys(params)[i]] + "'";
                    }
                    _callback();
                } else {
                    _callback();
                }
            },
            function query(_callback) {
                con.query(sql, function (err, result) {
                    if (err) {
                        return callback(err, out);
                    } else {
                        out = result;
                        connection.end();
                        return callback(null, out);
                    }
                });
            }
        ])
    } else {
        return callback("Table not initialized", out);
    }
}