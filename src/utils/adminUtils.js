import jwt from "jsonwebtoken";
import { secret } from "../connect/jwtConfig.js";
import User from "../models/User.js";
import { UserDAO } from "../daos/userDao.js";

export const isAdmin = async (token) => {
  const decoded = jwt.verify(token, secret);
  const userId = decoded.data;
  const user = await UserDAO.ReadUserById(userId);
  const role = user.roleId;
  return role;
};
