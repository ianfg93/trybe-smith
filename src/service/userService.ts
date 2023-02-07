import { IUser } from '../interfaces/User';
import userModel from '../models/userModel';

const createUser = async ({ username, vocation, level, password }: IUser) => {
  const user = await userModel.createUser(username, vocation, level, password);
  return user;
};

export default {
  createUser,
};