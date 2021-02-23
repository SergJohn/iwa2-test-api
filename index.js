const http = require('http'); 
const axios = require('axios'); 

http.createServer((req, res)=>{ 
    res.write("Hello world \n"); 
    res.end();
}).listen(8000); 

// write a response res.end(); 
    //end the response }).listen(8000); 
    // listen for requests on port 8000 let users = []; 
    // names of users will be stored here axios.get("https://jsonplaceholder.typicode.com/users") .then(({ data }) => { users = data.map(user => user.name); 
    // get only the names of the users and store in an array }) .catch(error=>{ console.log(error); 