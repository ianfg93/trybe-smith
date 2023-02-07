import { Request, Response } from 'express';
import productsService from '../service/productsService';

async function createProducts(req: Request, res: Response) {
  const { name, amount } = req.body;
  const id = await productsService.createProducts({ name, amount });
  return res.status(201).json({ id, name, amount });
}

export default {
  createProducts,
};