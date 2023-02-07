import express from 'express';
import userController from '../controller/userController';

const productRouter = express.Router();

productRouter.post('/', userController.createUser);

export default productRouter;