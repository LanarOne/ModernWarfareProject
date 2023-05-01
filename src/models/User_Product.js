import { DataTypes } from "sequelize";
import { sequelize } from "../connect/connection.js";
import User from "./User.js";
import Product from "./Product.js";

const User_Product = sequelize.define(
  "user_product",
  {},
  {
    timestamps: true,
    createdAt: `created`,
    updatedAt: `updated`,
    unique: false,
  }
);

User.belongsToMany(Product, { through: User_Product });
Product.belongsToMany(User, { through: User_Product });

export default User_Product;
