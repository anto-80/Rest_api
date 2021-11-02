const express = require("express");
const path = require('path'); 
const {Book, Author} = require('./models/index');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))




app.get('/books', async (req, res) => {
    
    const allBooks = await Book.findAll()
    
    res.json(allBooks)
})








app.get('/authors', async (req, res) => {
  const allAuthors = await Author.findAll()

  res.json(allAuthors)
})


app.get('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id)
    res.json({ book })
})

app.get('/authors/:id', async (req, res) => {
    
    const author = await Author.findByPk(req.params.id)
    res.json({ author })
})



app.post('/books', async (req, res) => {
    let newBook = await Book.create(req.body);
    res.json({newBook})
    //res.send('Created!!!')
})

app.delete('/books/:id', async (req, res) => {
    await Book.destroy({
        where : {id : req.params.id}
    })
    res.send("Deleted!!")
})

app.put("/authors/:id", async (req,res) => {
    let updated = await Author.update(req.body, {
        where : {id : req.params.id}
    })
    res.send("Updated!!")
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
