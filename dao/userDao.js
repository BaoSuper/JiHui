var mysql = require('mysql');
//sql映射文件
var userMapping = require('../mapper/userSqlMapping');
//连接池
var db_connection = require('../util/db_connection');
//var db_connection = require('../conf/db').db_connect();
//var db_connection = mysql.createPool(db.mysql_dev);

//相应一个json数据格式
var responseJSON = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({     code:'-200',     msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

//从连接池获取链接

module.exports = {
    add:function(req,res,next){
            db_connection.getConnection(function(err,connection){
                var param = req.query || req.params;
                connection.query(userMapping.insert,["索隆",4,20],function(err,result){
                    if(result){
                        result = {
                            code: 200,
                            msg:'增加成功'
                        };
                    }
                    // 以json形式，把操作结果返回给前台页面
                    responseJSON(res, result);
                });
            });
        },
    find:function (req,res,next) {
        db_connection.getConnection(function(err,connection) {
            connection.query(userMapping.find,function(err,result,fields) {
                responseJSON(res, result);
              //  connection.release();
                //console(result);

            });

        });
    }
};
