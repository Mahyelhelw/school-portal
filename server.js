 const express = require("express");
 const app = express();
// const mysql = require("mysql2");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   port: process.env.MYSQL_PORT
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Database connection failed:", err);
//   } else {
//     console.log("Connected to MySQL!");
//   }
// });

//function initDB() {
  // const studentsTable = `
  //   CREATE TABLE IF NOT EXISTS students (
  //     id INT AUTO_INCREMENT PRIMARY KEY,
  //     name VARCHAR(100),
  //     age INT
  //   )
  // `;

  // const teachersTable = `
  //   CREATE TABLE IF NOT EXISTS teachers (
  //     id INT AUTO_INCREMENT PRIMARY KEY,
  //     name VARCHAR(100),
  //     subject VARCHAR(100)
  //   )
  // `;

//   db.query(studentsTable);
//   db.query(teachersTable);
// }


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});