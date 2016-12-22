var rediz = require('redis');
var redis = rediz.createClient({"host": "192.168.20.124", "port": "6379"});

redis.on("error",function(err){
    console.log("Error"+ err);
});
redis.on("connect",runSample);

function runSample() {
    //Set a value
    redis.set("string key","hello word",function(err,reply){
        console.log(reply.toString());
    });
    redis.get("string key",function(err,reply){
        console.log(reply.toString());
    });
}