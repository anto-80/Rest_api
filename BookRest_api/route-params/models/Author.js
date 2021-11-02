const {sequelize} = require('../db');
const { DataTypes, Model } = require('sequelize');

class Author extends Model {}

Author.init({
  name: DataTypes.STRING,
  
}, {
  sequelize,
  timestamps: false
})

module.exports = {Author};