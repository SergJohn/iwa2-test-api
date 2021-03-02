const http = require('http'); 
const axios = require('axios'); 

let users = []; // names of users will be stored here
(async function getNames(){
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        users = data.map(user=>user.email);
        console.log(users)
    } catch (error) {
        
    }
    
})();

// axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(({ data }) => {
//         users = data.map(user => user.email); // get only the names of the users and store in an array
//         console.log(users);
//     })
//     .catch(error=>{
//         console.log(error);
//     }); 


http.createServer((req, res)=>{ 
    res.write(users.join("\n")); 
    res.end();
}).listen(8000); 

// write a response res.end(); 
    //end the response }).listen(8000); 
    // listen for requests on port 8000 let users = []; 
    // names of users will be stored here axios.get("https://jsonplaceholder.typicode.com/users") .then(({ data }) => { users = data.map(user => user.name); 
    // get only the names of the users and store in an array }) .catch(error=>{ console.log(error); 