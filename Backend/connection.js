const mysql2 = require("mysql2");
require("dotenv").config();

const connection = mysql2.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (!error) {
    console.log("DB connected successfully.");
  } else {
    console.log(error);
  }
});

module.exports = connection;
