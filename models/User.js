// models/User.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db.js');

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
}, {
  sequelize,
  modelName: 'user',
  tableName: "bde_Users",
  timestamps: false
});

module.exports = User;

module.exports = User;
