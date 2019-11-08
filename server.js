var tweetsRoutes = require('./api/routes/tweetRoutes'); //importing route

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const cors = require('cors');

var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
// parse application/json
app.use(bodyParser.json())
app.use('/api/tweets', tweetsRoutes);
app.listen(port);
console.log('Servidor iniciado en el puerto: ' + port);