const express = require('express');
const app = express();

app.use(express.json()); // decode the body data from the client

let books = [
    {id: 1, title: 'Harry Potter', author: 'James Bond'},
    {id: 2, title: 'How to get rich in 3 days', author: 'Peter Parker'},
    {id: 3, title: 'Leadership nonsense', author: 'Smith Role'},
    {id: 4, title: 'Mary has a little lamb', author: 'Smith Role'},
];

//Routes
//Get all books
app.get('/books', function(req, res){
    let cloneBooks = [...books];

    if (req.query.author) {
        cloneBooks = cloneBooks.filter(book => {
            return book.author === req.query.author;
        });
    }

    res.status(200).send(cloneBooks); //return all books
});

//Get a single book
app.get('/books/:bookId', function(req, res){
    let bookId = parseInt(req.params.bookId); //parseInt converts a string to number

    //Search for a book in the books array
    let book = books.find(book => {
        return book.id === bookId;
    });

    if (book) {
        res.status(200).send(book);
    } else {
        res.status(404).send('Book not found');
    }
});

//Create a new book
app.post('/books', function(req, res){
    let book = {
        id: parseInt(req.body.id),
        title: req.body.title,
        author: req.body.author
    };

    books.push(book);
    res.status(201).send(book);
});

//Partial update of a book
app.patch('/books/:bookId', function(req, res){
    let bookId = parseInt(req.params.bookId); //parseInt converts a string to number

    //Search for a book in the books array
    let book = books.find(book => {
        return book.id === bookId;
    });

    if (book) {
        //Update book
        book.title = req.body.title;

        //Send response
        res.status(200).send(book);
    } else {
        res.status(404).send('Book not found');
    }
});

//Delete a book
app.delete('/books/:bookId', function(req, res){
    let bookId = parseInt(req.params.bookId); //parseInt converts a string to number

    //Search for a book in the books array and return the index
    let index = books.findIndex(book => {
        return book.id === bookId;
    });

    if (index >= 0) {
        let book = books[index];

        //Delete book
        books.splice(index, 1);
        
        //Send response
        res.status(200).send(book);
    } else {
        res.status(404).send('Book not found');
    }
});

app.listen(3000, function(){
    console.log('Server running on port 3000....')
});