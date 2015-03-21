var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

app.get('/', function(req, res){
  res.send('Hello from inside a container!');
});
    
app.listen(8080);
    