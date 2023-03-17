import { DataTypes } from "sequelize";
import { sequelize } from "../connect/connection.js";
import Product from "./Product.js";

const Type = sequelize.define(
  "type",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        message: `a type with the same name already exists`,
      },
    },
  },
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: "updated",
  }
);

Type.hasMany(Product, {
  foreignKey: {
    allowNull: false,
    name: "typeId",
  },
  sourceKey: "id",
});
export default Type;
