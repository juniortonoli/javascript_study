// npm install express
//npm install mysql
const express = require("express");
const app = new express();
app.listen(3000, () => {
    console.log('api running!')
})

//mysql
const mysql = require("mysql")
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog',
})

//routes
app.get("/", (req,res) => {
    connection.query("SELECT * FROM users", (erro, resultados) => {
        res.send(resultados);
    })
})
