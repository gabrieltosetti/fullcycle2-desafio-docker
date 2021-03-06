const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 8080
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const connection = mysql.createConnection(config)

connection.query('CREATE TABLE IF NOT EXISTS people(id int primary key auto_increment, name varchar(200))')
connection.query(`INSERT INTO people(name) values('Gabriel Tosetti')`)

app.get('/', (req, res) => {
    connection.query(`SELECT name from people where id = 1`, function (err, result, fields) {
        if (err) throw err;

        res.send(`
            <h1>Full Cycle</h1>
            <h2>Olá ${result[0].name}</h2>
        `)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})