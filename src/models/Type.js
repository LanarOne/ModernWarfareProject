import { DataTypes } from "sequelize";
import sequelize from "../connect/connection.js";

const Type = sequelize.define( 'type', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : {
            message : `a type with the same name already exists`
        }
    }
}, {
    timestamps : true,
    createdAt : 'created',
    updatedAt : 'updated',
} );

export default Type;