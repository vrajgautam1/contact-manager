const mysql = require('mysql2');

require("dotenv").config()
const dbpwd = process.env.DB_PWD

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'testDB',
    password: dbpwd
})


connection.connect((err)=>{
    if(err){
        return console.log(err.message, "there are some issues with database connection")
    }

    console.log('database connected successfully');    
})

module.exports = connection;