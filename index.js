const http = require('http'); 
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

var app = express();
var port = 8000;

dotenv.config();
app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

// mongoose connection
// const dbURI = "mongodb://localhost/test";
const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));

mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});

app.listen(port);

// first external API
// let users = [];
// let emails = [];
// (async function getNames(){
//     try {
//         const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
//         users = data.map(user=>user.name);
//         emails = data.map(email=>email.email);
//         // console.log(users);
//         // console.log(emails);
//     } catch (error) {
        
//     }
    
// })();