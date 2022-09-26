const router = require('express').Router();

const IndexController = require('../controllers/indexController');
const ClientsController = require('../controllers/clientsController')

router.get('/', IndexController.index);

router.post('/add', ClientsController.add)

module.exports = router; 