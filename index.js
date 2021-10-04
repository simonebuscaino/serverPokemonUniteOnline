const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "mydb",
})

app.post("/create", (req, res) => {
    const nome = req.body.nome;
    const cognome = req.body.cognome;

    // console.log(nome);

    db.query('INSERT INTO testTable (nome, cognome) VALUES (?,?)', 
    [nome, cognome],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    })
})

app.listen(3001, () => {
    console.log("Ci sono");
})