const express = require('express');
const app = express();
const db_config = require('./db_config');
const Task = require('./models/task');
const cors = require('cors');

app.use(cors()); //Grant access to the frontend

//Test DB connection
db_config.authenticate().then(() => {
    console.log('Database is connected.');
}).catch((err) => {
    console.log('Database connected failed: ', err);
});

app.get('/tasks', function(req, res){
    Task.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});


app.listen(3000, function(){
    console.log('server running on port 3000...');
});