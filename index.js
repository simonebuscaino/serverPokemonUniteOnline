const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: "eu-cdbr-west-01.cleardb.com",
    user: "b15c8bbfd41172",
    password: "6032148d",
    database: "heroku_630535a52066662",
})


app.post("/create", (req, res) => {
    const nome = req.body.nome;
    const cognome = req.body.cognome;

    // console.log(nome);

    db.query('INSERT INTO provola (nome, cognome) VALUES (?,?)', 
    [nome, cognome],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    })
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Ci sono");
})