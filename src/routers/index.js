const router = require('express').Router();

const IndexController = require('../controllers/indexController');
const ClientsController = require('../controllers/clientsController')

router.get('/', IndexController.index);

router.post('/add', ClientsController.add);

//Editar
router.get('/edit', ClientsController.editIndex);
router.post('/edit/:id', ClientsController.edit);

//remover
router.get('/remove/:id', ClientsController.remove);

module.exports = router; 