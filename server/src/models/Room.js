// room.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Room', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roomNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // type: {
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        people: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        available: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descriptionDetail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        beds: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });
};
