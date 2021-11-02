const {sequelize} = require('../db')
const {Book} = require('./Book')
const {Author} = require('./Author')



Book.belongsTo(Author, {foreignKey: 'AuthorId'}) 
Author.hasMany(Book, {foreignKey: 'AuthorId'})



module.exports = { Book, Author, }
