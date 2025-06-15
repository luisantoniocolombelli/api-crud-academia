// Definem as URLs e qual método HTTP chama qual função do controller

const express = require('express');
const router = express.Router();
const registersController = require("../controllers/registersController");

router.get('/', registersController.index);
router.get('/:id', registersController.show);

router.post('/', registersController.create);

router.put('/:id', registersController.update);

router.delete('/:id', registersController.delete);

module.exports = router;