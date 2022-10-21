'use strict';

require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  SECRET_KEY: process.env.SECRET_KEY,
  db: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
    // port: process.env.DB_PORT,
  },
};
