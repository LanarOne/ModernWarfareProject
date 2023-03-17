import { Cart_UserDAO } from "../daos/cart_userDao.js";
import Cart_User from "../models/Cart_User.js";
import { CartDAO } from "../daos/cartDao.js";

const createCart_User = async (req, res) => {
  const { userId, cartId } = req.body;
  if (!userId || !cartId) {
    return res
      .status(403)
      .json({ message: `both userId and cartId are required` });
  }
  const cart = await Cart_UserDAO.Create(userId, cartId);
  return res
    .status(201)
    .json({ message: `cart_user successfully created`, data: cart });
};

const readAll = async (req, res) => {
  const carts_users = await Cart_UserDAO.ReadAll();
  if (!carts_users) {
    return res.status(404).json({ message: `could not find carts_users list` });
  }
  return res.status(200).json({
    message: `carts_users list successfully retrieved`,
    data: carts_users,
  });
};

const readOne = async (req, res) => {
  const id = req.params.id;
  const cart_user = await Cart_UserDAO.ReadOne(id);
  if (!cart_user) {
    return res.status(404).json({ message: `could not find data` });
  }
  return res
    .status(200)
    .json({ message: `cart_user successfully retrieved`, data: cart_user });
};

const deleteOne = async (req, res) => {
  const id = req.params.id;
  const cart_user = await Cart_UserDAO.DeleteOne(id);
  if (!cart_user) {
    return res.status(404).json({ message: `could not find cart_user` });
  }
  return res.status(200).json({ message: `cart_user successfully deleted` });
};
export const Cart_UserController = {
  createCart_User,
  readAll,
  readOne,
  deleteOne,
};
