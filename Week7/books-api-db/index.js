const express = require('express');
const app = express();
const db_config = require('./db_config');
const Book = require('./models/book');
const Genre = require('./models/genre');

app.use(express.json());

//Define the relationship between Books and Genres tables
Book.belongsTo(Genre, {
    foreignKey: 'genreId'
});

//Testing database connection
db_config.authenticate().then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.log('An error happened while connecting to DB: ' + err);
});

//Get all books
app.get('/books', function(req, res){
    const sql_param = {
        include: [Genre]
    }

    Book.findAll(sql_param).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
});

//Get book by ID
app.get('/books/:bookId', function(req, res){
    const bookId = parseInt(req.params.bookId);

    Book.findByPk(bookId).then((result) => {
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send('Book not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Create a new book
app.post('/books', function(req, res){
    const book = {
        title: req.body.title,
        author: req.body.author
    };

    Book.create(book).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Update a book title
app.patch('/books/:bookId', function(req, res){
    const bookId = parseInt(req.params.bookId);

    //Use the bookId to find the book in DB
    Book.findByPk(bookId).then((result) => {
        if (result) {
            //Update book with changes
            result.title = req.body.title;

            //Save update back to DB
            result.save().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });            
        } else {
            res.status(404).send('Book not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Delete a book
app.delete('/books/:bookId', function(req, res){
    const bookId = parseInt(req.params.bookId);

    //Use the bookId to find the book in DB
    Book.findByPk(bookId).then((result) => {
        if (result) {
            //Delete book from DB
            result.destroy().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });            
        } else {
            res.status(404).send('Book not found');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.listen(3000, function(){
    console.log('Server running on port 3000....');
});

let name = 'John';

name = 34;

name = false;