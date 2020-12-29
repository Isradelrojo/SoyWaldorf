const server = require('express').Router();

server.get('/', (req,res,next) => {
    res.send({test: 'test'})
})
module.exports = server;