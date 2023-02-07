import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createProducts = async (name: string, amount: number) => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return insertId;
};

export default {
  createProducts,
};