var tweetsRoutes = require('./api/routes/tweetRoutes'); //importing route

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/api/tweets', tweetsRoutes);
app.listen(port);
console.log('Servidor iniciado en el puerto: ' + port);