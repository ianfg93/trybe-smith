import express from 'express';
import productsController from '../controller/productsController';

const router = express.Router();

router.post('/', productsController.createProducts);
router.get('/', productsController.getAllProducts);

export default router;