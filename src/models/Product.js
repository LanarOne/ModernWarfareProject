import { DataTypes } from "sequelize";
import { sequelize } from "../connect/connection.js";

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assistance: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alt: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    flying: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    cockpit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weapons: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ammo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    magazine: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    range: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: "updated",
  }
);

export default Product;
