const fs = require("fs");
const path = require("path");
const db = require("./config/dbconnection");
const schema = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8");

db.query(schema, (err, result) => {
    if (err) {
        throw err;
    }
    console.log("Table created (if not exists)");
    process.exit();
});
