import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createUser = async (username: string, vocation: string, level: number, password: string) => {
  const query = `
  INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ? )`;
  await connection.execute<ResultSetHeader>(query, [username, vocation, level, password]);
};

export default {
  createUser,
};