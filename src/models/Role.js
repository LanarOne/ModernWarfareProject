import { DataTypes } from "sequelize";
import sequelize from "../connect/connection.js";
import User from './User.js';

const Role = sequelize.define( 'role', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    }
} );

Role.hasMany( User, {
    foreignKey : {
        allowNull : false,
        name : 'roleId'
    },
    sourceKey : 'id'
} );

export default Role;