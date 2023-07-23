const pasienController = require('../controllers/pasien');
const router = require('express').Router();

router.post('/', pasienController.create);
router.get('/', pasienController.findAll);
router.put('/:id', pasienController.update);
router.put('/:id', pasienController.update);
router.delete('/:id', pasienController.delete);
router.get('/:id', pasienController.findOne);

module.exports = router;
