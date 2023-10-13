const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Booking', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        entrance: {
            type: DataTypes.DATE,
            allowNull: false
        }, 
        exit: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },  { timestamps: false });
};