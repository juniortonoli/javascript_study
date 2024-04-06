// npm install express
//npm install mysql
const express = require("express");
const app = new express();
app.listen(3001, () => {
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
    connection.query('SELECT * FROM users WHERE id = 4', (erro, resultados) => {
        if (erro) {
            res.send(erro.sqlMessage);
        }
        if (resultados.length != 0) {
            let html = '<ul>'
            resultados.forEach(row => {
                html += '<li>' + row.username + '</li>'
                                               
            })
            html += '</ul>'
            res.send(html)
        } else {
            res.send('Nao existem resultados.')
        }
    })
})

//connection.query('SELECT * FROM users WHERE id = ? and username = ?', [1, 'ana']  (erro, resultados) => {
