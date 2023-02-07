import { IProduct } from '../interfaces/Products';
import productsModel from '../models/productsModel';

const createProducts = async ({ name, amount }: IProduct) => {
  const id = await productsModel.createProducts(name, amount);
  return id;
};

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return products;
};

export default {
  createProducts,
  getAllProducts,
};