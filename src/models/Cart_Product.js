import { DataTypes } from "sequelize";
import sequelize from "../connect/connection.js";
import User from './User.js';
import Cart from "./Cart.js";

const Cart_Product = sequelize.define( 'cart_product', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    }
}, {
    timestamps : true,
    createdAt : 'created',
    updatedAt : 'updated'
} );

Cart.belongsToMany( User, { through : Cart_Product } );
User.belongsToMany( Cart, { through : Cart_Product } );
export default Cart_Product;