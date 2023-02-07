import { Request, Response } from 'express';
import { generateToken } from '../middleware/validateLogin';
import userService from '../service/userService';

async function createUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  await userService.createUser({ username, vocation, level, password });
  const token = generateToken({ username, vocation, level, password });
  return res.status(201).json({ token });
}

export default {
  createUser,
};