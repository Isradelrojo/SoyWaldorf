var express = require('express') //llamamos a Express
var router = express() ;
var port = process.env.PORT || 5000;

router.listen(port)
console.log('API escuchando en el puerto ' + port)