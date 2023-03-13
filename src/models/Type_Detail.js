import { DataTypes } from "sequelize";
import sequelize from "../connect/connection.js";
import Type from "./Type.js";
import Product from "./Product.js";

const Type_Detail = sequelize.define( 'type_detail', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    Detail : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {
    timestamps : true,
    createdAt : 'created',
    updatedAt : 'updated',
} );

Type.belongsToMany( Product, { through : Type_Detail } );
Product.belongsToMany( Type, { through : Type_Detail } );

export default Type_Detail;