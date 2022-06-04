var sqlite3 = require("sqlite3").verbose()
var { uuid } = require("uuidv4")

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log("Connected to the SQLite database.")
    db.run(
      `CREATE TABLE messages (id string(50) PRIMARY KEY,
            name text, 
            message text)`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert = "INSERT INTO messages (id, name, message) VALUES (?,?,?)"
          db.run(insert, [uuid(), "Romadhan", "Hello world!"])
        }
      }
    )
  }
})

module.exports = db