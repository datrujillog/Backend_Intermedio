const mongoose = require("mongoose");
const { db, DB_MONGO_URL } = require("../environment/environment");
require("colors");

let path = DB_MONGO_URL || `mongodb+srv://${db.user}:${db.password}@${db.host}/${db.name}?retryWrites=true&w=majority`

const connection = async () => {
  try {
    const conn = await mongoose.connect(path);
    console.log("Mongo DB connected:", conn.connection.host.bgBlue.black);
  } catch (err) {
    console.error("ERR ", err);
    process.exit(1); // Exit process with failure
  }
};


module.exports = { connection, mongoose };
