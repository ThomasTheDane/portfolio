var express = require('express');
var app = express();
app.use("/styles", express.static(__dirname + "/styles"));
app.use("/scripts", express.static(__dirname + "/scripts"));
var server = require('http').createServer(app);
var sys = require('sys');

app.use("/style", express.static(__dirname + "/style"));
app.use("/images", express.static(__dirname + "/images"));

var port = process.env.PORT || 3000;
server.listen(port);

app.get('/', function (req, res){
	sys.log("showing / ");
//	res.render(__dirname + '/index.ejs', {});
	res.sendfile(__dirname + '/index.html');
});