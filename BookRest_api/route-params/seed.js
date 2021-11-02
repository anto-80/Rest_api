const {sequelize} = require('./db')
const {Book, Author} = require('./models/index') 

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedBook = [
  {
    title: 'Power of Now',
    genre: 'Spirituality'
    
  },
  {
    title: 'Bloodlands',
    genre: 'History'
    
  },
  {
    title: 'Passage of Power',
    genre: 'Biography'
    
  },
  {
    title: 'The Witches',
    genre: 'History'
    
  },
  {
    title: 'Dark Money',
    genre: 'Politics'
    
  },
  
]

const seedAuthor = [
  {
    name: 'Eckhart Tolle',
    BookId : 1,
  },
  {
    name: 'Timothy Synder',
    BookId : 2,
  },
  {
    name: 'Robert Caro',
    BookId : 3,
  },
  {
    name: 'Stacy Schiff',
    BookId : 4,
  },
  {
    name: 'Jane Mayer',
    BookId : 5,
  },
]




//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Book.bulkCreate(seedBook, {validate: true})
    await Author.bulkCreate(seedAuthor, {validate: true})
    
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })

