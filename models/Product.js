const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Product extends Model {}


Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            notNull: true,
        },
        price: {
            type: DataTypes.DECIMAL,
            notNull: true,
            isDecimal: true,
        },
        stock: {
            type: DataTypes.INTEGER,
            notNull: true,
            defaultValue: 10,
            isNumeric: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "category",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "product",
    }
);

module.exports = Product;
