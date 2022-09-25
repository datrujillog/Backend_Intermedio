// // require("colors");
 'use strict' ;
const  express  = require("express");
const { port, env } = require("./src/config/environment");
const{ok,created,noContent} = require("./sendStatus");

const app = express();
require('colors');


app.get("/", (req, res) => {
  res.sendStatus(ok);
});







/* Listening to the port and printing out the port number and the environment. */
app.listen(port);
console.log("")
console.log(`Server is running on port ${port.bgBlue.black} in " ${env.bgBlue.black} " mode`.bgYellow.black);
console.log("")
console.log( `http://localhost:${port.bgBlue.black}` .bgYellow.black);



// const http = require("http");
// const server = http.createServer();



