const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Users = db.define('users', {
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email:{
    type: DataTypes.STRING(255),
    allowNull:false,
    unique: true,
    validate:{
      isEmail:true
    }
  },
  password:{
    type: DataTypes.STRING,
    allowNull:false
  }
},{
  timestamps:false
});

module.exports = Users;