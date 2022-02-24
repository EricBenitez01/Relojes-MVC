var express = require('express');
const { listar } = require('../controllers/productosController');

var router = express.Router();

/* GET home page. */
router.get('/', listar );

module.exports = router;
