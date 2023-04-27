import Product from "../models/Product.js";

const Create = async (
  name,
  type,
  assistance,
  price,
  img,
  alt,
  description,
  flying,
  cockpit,
  weapons,
  ammo,
  magazine,
  range,
  typeId
) => {
  let result = null;
  try {
    result = Product.create({
      name,
      type,
      assistance,
      price,
      img,
      alt,
      description,
      flying,
      cockpit,
      weapons,
      ammo,
      magazine,
      range,
      typeId,
    });
    return result;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const ReadAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const ReadOneById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return null;
    }
    return product;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const UpdateOne = async (productId, data) => {
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return null;
    }
    const {
      name,
      type,
      assistance,
      price,
      img,
      alt,
      description,
      flying,
      cockpit,
      weapons,
      ammo,
      magazine,
      range,
    } = data;
    Product.update(
      {
        name,
        type,
        assistance,
        price,
        img,
        alt,
        description,
        flying,
        cockpit,
        weapons,
        ammo,
        magazine,
        range,
      },
      { where: { id: productId } }
    );
    return product;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const DeleteOne = async (productId) => {
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return null;
    }
    product.destroy();
    return `product found and destroyed`;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const ProductDAO = {
  Create,
  ReadAllProducts,
  ReadOneById,
  UpdateOne,
  DeleteOne,
};
