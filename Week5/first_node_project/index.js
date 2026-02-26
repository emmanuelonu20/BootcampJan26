const express = require('express'); //importing the express package
const app = express(); //Make a new web app using express
const print = require('./print');

//Route
app.get('/', function(req, res){
    let name = print.printFullName('John', 'Wick');
    res.send('Hello World ' + name);
});

//Create server
app.listen(3000, function(){
    console.log('Server is running on port 3000...');
});