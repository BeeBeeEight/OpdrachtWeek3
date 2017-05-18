/**
 * Created by teun9 on 18-5-2017.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'user_opdrachtweek3',
    password: process.env.DB_PASSWORD,
    database: 'world'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;