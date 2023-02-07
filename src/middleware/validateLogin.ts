import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/User';

const TOKEN_SECRET = process.env.JWT_SECRET as string;

export const generateToken = (payload: IUser) => {
  const config: jwt.SignOptions = {
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, TOKEN_SECRET, config);
  return token;
};

export const authenticateToken = (token: string) => jwt.verify(token, TOKEN_SECRET);