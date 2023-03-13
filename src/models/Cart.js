import { DataTypes } from "sequelize";
import sequelize from "../connect/connection.js";
import User from './User';

const Cart = sequelize.define( '/cart', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps : true,
    createdAt : 'created',
    updatedAt : 'updated'
} );

Cart.hasMany( User, {
    foreignKey : {
        allowNull : true,
        name : 'cartId'
    },
    sourceKey : 'id'
} );
export default Cart;