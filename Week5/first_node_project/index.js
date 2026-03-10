const express = require('express'); //importing the express package
const app = express(); //Make a new web app using express
const print = require('./print');

app.use(myGlobalMiddleware);

function myGlobalMiddleware(req, res, next){
    console.log('This is a global middleware');
    next();
}

function myLocalMiddleware(req, res, next){
    console.log('This is a local middleware');
    next();
}

//Route
app.get('/', myLocalMiddleware, function(req, res){
    console.log('This is my home route');
    let name = print.printFullName('John', 'Wick');
    res.send('Hello World ' + name);
});

app.get('/about', function(req, res){
    res.send('About page');
});

//Create server
app.listen(3000, function(){
    console.log('Server is running on port 3000...');
});