import { DataTypes } from "sequelize";
import { sequelize } from "../connect/connection.js";
import User from "./User.js";

const Role = sequelize.define("role", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// User.belongsTo(Role, {
//   foreignKey: {
//     allowNull: false,
//     name: "roleId",
//   },
// });
export default Role;
