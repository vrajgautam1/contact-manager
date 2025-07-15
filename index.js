const express = require('express');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const db = require("./config/dbconnection")
const contactRouter = require("./routers/contactRouter")
app.use(contactRouter)

const port = process.env.PORT || 3000
app.listen(port, (err)=>{
    if(!err){
        db
        console.log("server is running")
        console.log("http://localhost:"+port)
    }
})