var mysql = require('mysql');
var db = require('../conf/mysqlConfig');

var pool = mysql.createPool(db.mysql_dev);
module.exports = pool;


