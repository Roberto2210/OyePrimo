const express = require('express');
const router = express.Router();

//use: utilizar
router.use(require('./UsersRoutes'));
router.use(require('./AdviserRoutes'))

module.exports = router;