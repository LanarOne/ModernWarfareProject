import { DataTypes } from "sequelize";
import { sequelize } from "../connect/connection.js";

const Cart = sequelize.define(
  "cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: "updated",
  }
);
export default Cart;
