import Cart from "../models/Cart.js";
const Create = async () => {
  let result = null;
  try {
    result = Cart.create();
    return result;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const ReadAll = async () => {
  try {
    const carts = await Cart.findAll();
    if (!carts) {
      return null;
    }
    return carts;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const ReadOneById = async (id) => {
  try {
    const cart = await Cart.findByPk(id);
    if (!cart) {
      return null;
    }
    return cart;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const DeleteOne = async (id) => {
  try {
    const cart = await Cart.findByPk(id);
    if (!cart) {
      return null;
    }
    cart.destroy();
    return `cart found and destroyed`;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};
export const CartDAO = {
  Create,
  ReadAll,
  ReadOneById,
  DeleteOne,
};
