// // require("colors");
 'use strict' ;
const  express  = require("express");
const { port, env } = require("./De Ejemplo/src/config/environment/environment");
const { ok, created, noContent } = require("./De Ejemplo/sendStatus");
// const routers = require("./De Ejemplo/src/routers");
const app = express();
require('colors');


app.use(express.json());   // Midedleware para poder usar el body en las peticiones POST y PUT 
app.use(express.urlencoded({ extended: false }));  // esto hace que el body sea un objeto de javascript
/* Telling the server to use the routers.js file. */  
// app.use('/api',routers);







/* Listening to the port and printing out the port number and the environment. */
app.listen(port);
console.log("")
console.log(`Server is running on port ${port.bgBlue.black} in " ${env.bgBlue.black} " mode`.bgYellow.black);
console.log("")
console.log( `http://localhost:${port.bgBlue.black}` .bgYellow.black);



// const http = require("http");
// const server = http.createServer();



