import { DataTypes } from "sequelize";
import { sequelize } from "../connect/connection.js";
import User from "./User.js";
import Product from "./Product.js";

const User_Product = sequelize.define( 'user_product', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    }
}, {
    timestamps : true,
    createdAt : 'created',
    updatedAt : 'updated',
} );

User.belongsToMany( Product, { through : User_Product } );
Product.belongsToMany( User, { through : User_Product } );

export default User_Product;