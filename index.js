const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
app.use(cors(corsOpts));

app.use(express.json());

const db = mysql.createConnection({
    host: "eu-cdbr-west-01.cleardb.com",
    user: "b15c8bbfd41172",
    password: "6032148d",
    database: "heroku_630535a52066662",
})


app.post("/create", (req, res) => {
    const name = req.body.name;
    const lobbyCode = req.body.lobbyCode;
    const typeOfAccess = req.body.typeOfAccess;
    const secretCode = req.body.secretCode;
    const typeOfLobby = req.body.typeOfLobby;
    const nPlayers = req.body.nPlayers;

    // console.log(nome);

    db.query('INSERT INTO lobby (name, lobbyCode, typeOfAccess, secretCode, typeOfLobby, nPlayers) VALUES (?,?,?,?,?,?)', 
    [name, lobbyCode, typeOfAccess, secretCode, typeOfLobby, nPlayers],
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