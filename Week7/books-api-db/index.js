const express = require('express');
const app = express();
const db_config = require('./db_config');

//Testing database connection
db_config.authenticate().then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.log('An error happened while connecting to DB: ' + err);
});


app.listen(3000, function(){
    console.log('Server running on port 3000....');
});