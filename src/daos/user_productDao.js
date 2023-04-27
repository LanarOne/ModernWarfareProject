import User_Product from "../models/User_Product.js";
import Cart_User from "../models/Cart_User.js";

const Create = async (userId, productId) => {
  let result;
  try {
    result = User_Product.create({ userId, productId });
    return result;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const ReadAll = async () => {
  try {
    const users_products = await User_Product.findAll();
    if (!users_products) {
      return null;
    }
    return users_products;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const ReadOne = async (id) => {
  try {
    const user_product = await User_Product.findOne({
      where: { userId, productId },
    });
    if (!user_product) {
      return null;
    }
    return user_product;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const DeleteOne = async (id) => {
  try {
    const user_product = await User_Product.findOne({
      where: { id: productId },
    });
    if (!user_product) {
      return null;
    }
    user_product.destroy();
    return `user_product found and destroyed`;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};
export const User_ProductDAO = {
  Create,
  ReadAll,
  ReadOne,
  DeleteOne,
};
