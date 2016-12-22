var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.20.124',//远程MySQL数据库的ip地址
    user     : 'root',
    password : '123456',
    database:'bao'
});

connection.connect();

connection.query('SELECT * from users', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows);
});

connection.end();