import express from 'express';
import productsController from '../controller/productsController';

const productRouter = express.Router();

productRouter.post('/', productsController.createProducts);
productRouter.get('/', productsController.getAllProducts);

export default productRouter;