const http = require('http'); 
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

// mongoose connection
const dbURI = "mongodb://localhost/test";

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
let users = [];
let emails = [];
(async function getNames(){
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user=>user.name);
        emails = data.map(email=>email.email);
        // console.log(users);
        // console.log(emails);
    } catch (error) {
        
    }
    
})();

// second external API
// endpoint https://swapi.dev/api/people 
let characteres = [];
(async function getCharacteres(){
    try {
        const {data} = await axios.get("https://swapi.dev/api/people");
        
        // one approach using for loop
        for(let i = 0; i < data.results.length; i++){
            characteres.push(data.results[i].name);
        }

        //or instead of a loop second approach using map
        // characteres = data.results.map(character=>character.name);

        console.log(data.results.name);
        console.log(characteres);
    } catch (error) {
        console.log(error)
    }
    
})();

// http.createServer((req, res)=>{ 
//     // res.write(users.join("\n"));
//     // res.write('\n\n' + emails.join('\n')); 
//     res.write(characteres.join("\n"));
//     res.end();
// }).listen(8000); 

// snippet of code
// axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(({ data }) => {
//         users = data.map(user => user.email); // get only the names of the users and store in an array
//         console.log(users);
//     })
//     .catch(error=>{
//         console.log(error);
//     }); 

