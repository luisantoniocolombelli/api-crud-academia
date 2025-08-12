const express = require('express');
const router = express.Router();
const registersController = require("../controllers/registersController");

router.get('/', registersController.index);
router.get('/:id', registersController.read);

router.post('/', registersController.create);

router.put('/:id', registersController.update);

router.delete('/:id', registersController.delete);

module.exports = router;