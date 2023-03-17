import { CartDAO } from "../daos/cartDao.js";

const createCart = async (req, res) => {
  try {
    const cart = await CartDAO.Create();
    if (!cart) {
      return res.status(400).json({ message: `could not create cart` });
    }
    return res
      .status(201)
      .json({ message: `cart successfully created`, data: cart });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: `internal error`, data: err });
  }
};

const readAll = async (req, res) => {
  const carts = await CartDAO.ReadAll();
  if (!carts) {
    return res.status(404).json({ message: `could not find carts list` });
  }
  return res
    .status(200)
    .json({ message: `carts list successfully retrieved`, data: carts });
};

const readOneById = async (req, res) => {
  const id = req.params.id;
  const cart = await CartDAO.ReadOneById(id);
  if (!cart) {
    return res.status(404).json({ message: `could not find cart` });
  }
  return res
    .status(200)
    .json({ message: `cart successfully retrieved`, data: cart });
};

const deleteOne = async (req, res) => {
  const id = req.params.id;
  const cart = await CartDAO.DeleteOne(id);
  if (!cart) {
    return res.status(404).json({ message: `could not find cart` });
  }
  return res.status(200).json({ message: `cart successfully deleted` });
};

export const CartController = {
  createCart,
  readAll,
  readOneById,
  deleteOne,
};
