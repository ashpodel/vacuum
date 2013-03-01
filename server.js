var express = require('express');
var app = express();

//When we receive a GET request to /, to send back the text "Hello World". (How to send the contents of an HTML page?) 
//Details here: http://javascriptplayground.com/blog/2012/04/beginning-node-js-express-tutorial
app.get('/',function(req,res){
	res.send('hello world');	
})

app.use("/", express.static(__dirname));

app.listen(3000)