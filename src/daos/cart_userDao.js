import Cart_User from "../models/Cart_User.js";
import Cart from "../models/Cart.js";

const Create = async (cartId, userId) => {
  let result = null;
  try {
    result = Cart_User.create({ cartId, userId });
    return result;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const ReadAll = async () => {
  try {
    const carts = await Cart_User.findAll();
    if (!carts) {
      return null;
    }
    return carts;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const ReadOne = async (id) => {
  try {
    const cart_user = await Cart_User.findByPk(id);
    if (!cart_user) {
      return null;
    }
    return cart_user;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const DeleteOne = async (id) => {
  try {
    const cart_user = await Cart_User.findByPk(id);
    if (!cart_user) {
      return null;
    }
    cart_user.destroy();
    return `cart_user found and destroyed`;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

export const Cart_UserDAO = {
  Create,
  ReadAll,
  ReadOne,
  DeleteOne,
};
