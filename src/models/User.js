import { sequelize } from "../connect/connection.js";
import { DataTypes } from "sequelize";
import Role from "./Role.js";

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        message: "email already registered",
      },
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    planet: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    galaxy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wallet: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img: {
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

Role.hasMany(User, {
  foreignKey: {
    allowNull: false,
    name: "roleId",
  },
  sourceKey: "id",
});
export default User;
