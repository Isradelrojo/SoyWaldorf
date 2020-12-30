const { Router } = require('express');
const exampleRoute = require('./exampleRoute.js');
const router = Router();

router.use('/example', exampleRoute);

module.exports = router