import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getAllOrders = async () => {
  const query = `SELECT 
  ord.id AS id,
  ord.user_id AS userId,
  JSON_ARRAYAGG(prod.id) AS productsIds
FROM
  Trybesmith.products AS prod
      INNER JOIN
  Trybesmith.orders AS ord ON prod.order_id = ord.id
GROUP BY ord.id , ord.user_id`;
  const [result] = await connection.execute<RowDataPacket[]>(query);
  return result;
};

export default {
  getAllOrders,
};