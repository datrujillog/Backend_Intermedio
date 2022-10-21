'use strict';

const  express  = require("express");
const { port, env } = require("./src/config/environment/environment");
const { connection } = require("./src/config/database/db");

//Importando rutas
const users = require("./src/routers/users");
const auth = require("./src/routers/auth");

require('colors');
const app = express();

// Middlewares globales JSON
app.use(express.json());   // Midedleware para poder usar el body en las peticiones POST y PUT 
app.use(express.urlencoded({ extended: false }));  // esto hace que el body sea un objeto de javascript
/* Telling the server to use the routers.js file. */  

connection();

//TODO Usando las rutas 
users(app);
auth(app);





/* Listening to the port and printing out the port number and the environment. */
app.listen(port, () => {
  console.log("")
  console.log(`Server is running on port ${port.bgBlue.black} in " ${env.bgBlue.black} " mode`.bgYellow.black);
  console.log("")
  console.log( `http://localhost:${port.bgBlue.black}` .bgYellow.black);
});





// const http = require("http");
// const server = http.createServer();



