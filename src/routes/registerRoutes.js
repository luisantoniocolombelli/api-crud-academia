import express from 'express';
import router from 'express';
import memberController from '../controllers/memberController.js';

const router = express.Router();

router.post('/', memberController.create);
router.get('/', memberController.index);
router.get('/:id', memberController.read);
router.patch('/:id', memberController.update);
router.delete('/:id', memberController.delete);

export default router;