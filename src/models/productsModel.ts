import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/Products';

const createProducts = async (name: string, amount: number) => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return insertId;
};

const getAllProducts = async () => {
  const query = 'SELECT * FROM Trybesmith.products ORDER BY id';
  const [result] = await connection.execute<(IProduct & RowDataPacket)[]>(query);
  return result;
};
export default {
  createProducts,
  getAllProducts,
};