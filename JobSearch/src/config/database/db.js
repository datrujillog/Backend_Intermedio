const mongoose = require("mongoose");
const { db } = require("../environment/environment");
require("colors");

const connection = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${db.user}:${db.password}@${db.host}/${db.name}?retryWrites=true&w=majority`
    );
    console.log("Mongo DB connected:", conn.connection.host.bgBlue.black);
  } catch (err) {
    console.error("ERR ", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { connection, mongoose };
