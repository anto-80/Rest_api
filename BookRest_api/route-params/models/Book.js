const {sequelize} = require('../db');
const { DataTypes, Model } = require('sequelize');

class Book extends Model {

}

Book.init({
  title: DataTypes.STRING,
  genre: DataTypes.STRING

}, {
  sequelize,
  timestamps: false
})


module.exports = {Book};
