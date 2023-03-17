import { DataTypes } from "sequelize";
import { sequelize } from "../connect/connection.js";
import User from './User.js';
import Cart from "./Cart.js";

const Cart_User = sequelize.define( 'cart_user', {
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

Cart.belongsToMany( User, { through : Cart_User } );
User.belongsToMany( Cart, { through : Cart_User } );
export default Cart_User;