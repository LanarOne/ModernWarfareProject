import { User_ProductDAO } from "../daos/user_productDao.js";
import { Cart_UserDAO } from "../daos/cart_userDao.js";

const create = async (req, res) => {
  const { userId, productId } = req.body;
  if (!userId || !productId) {
    return res.status(400).json({ message: `userid & productid are required` });
  }
  try {
    const user_product = await User_ProductDAO.Create(userId, productId);
    return res.status(201).json({
      message: `user_product successfully created`,
      data: user_product,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: `error creating user_product`, err });
  }
};

const readAll = async (req, res) => {
  const users_products = await User_ProductDAO.ReadAll();
  if (!users_products) {
    return res
      .status(404)
      .json({ message: `could not find users_products list` });
  }
  return res.status(200).json({
    message: `users_products list successfully retrieved`,
    data: users_products,
  });
};

const readOne = async (req, res) => {
  const id = req.params.id;
  const user_product = await User_ProductDAO.ReadOne(id);
  if (!user_product) {
    return res.status(404).json({ message: `could not find data` });
  }
  return res.status(200).json({
    message: `user_product successfully retrieved`,
    data: user_product,
  });
};

const deleteOne = async (req, res) => {
  const id = req.params.id;
  const user_product = await User_ProductDAO.DeleteOne(id);
  if (!user_product) {
    return res.status(404).json({ message: `could not find user_product` });
  }
  return res.status(200).json({ message: `user_product successfully deleted` });
};

export const User_ProductController = {
  create,
  readAll,
  readOne,
  deleteOne,
};
