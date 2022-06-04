const express = require("express");
const app = express();
// var { uuid } = require("uuidv4");
// var db = require("./database.js");

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Server port
const HTTP_PORT = process.env.PORT || 3000;
app.listen(HTTP_PORT, () =>
  console.log(`Server running on ${HTTP_PORT}, http://localhost:${HTTP_PORT}`)
);

// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to kaween!" });
});
// Insert here other API endpoints
// app.get("/messages", (req, res, next) => {
//   var sql = "SELECT * FROM messages";
//   var params = [];
//   db.all(sql, params, (err, rows) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: rows,
//     });
//   });
// });
// app.post("/messages", (req, res, next) => {
//   var errors = [];
//   if (!req.body.name) {
//     errors.push("No name specified");
//   }
//   if (!req.body.message) {
//     errors.push("No message specified");
//   }
//   if (errors.length) {
//     res.status(400).json({ error: errors.join(",") });
//     return;
//   }
//   var data = {
//     id: uuid(),
//     name: req.body.name,
//     message: req.body.message,
//   };
//   var sql = "INSERT INTO messages (id, name, message) VALUES (?,?,?)";
//   var params = [data.id, data.name, data.message];
//   db.run(sql, params, function (err, result) {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: data,
//       id: this.lastID,
//     });
//   });
// });

// Default response for any other request
app.use(function (req, res) {
  res.json({ message: "Whatcha doing here dude?" });
});
