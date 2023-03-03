const db = require("./db");
const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(helmet());

app.get("/users", (req, res) => {
  const query = "SELECT * FROM users";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL database", err);
      return;
    }
    console.log("Data fetched successfully", results);
  });
});
module.exports = app;
