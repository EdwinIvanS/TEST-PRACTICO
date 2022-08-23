var express = require('express');
var router = express.Router();
const apiMainController = require("../controller/apiControllers")

/* GET home page. */
router.get('/items', apiMainController.consulta);
router.get('/items/:id', apiMainController.consultaId);


module.exports = router;
