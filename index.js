console.log("Hello World!")
var express = require('express');
 var app = express();

 app.get('/:club', function (req, res) {
   res.send('Welcome to the ' + req.params.club + '!');
 });

 var server = app.listen(process.env.PORT, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port);
 });