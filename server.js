const express = require('express');
const bodyParser = require("body-parser");
const app = express()
const mysql = require("mysql")
const fs = require("fs");
const port = process.env.PORT || 5000;

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const connection = mysql.createConnection(conf);

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/api/customers", (req, res) =>  {
    connection.query(
        `SELECT * FROM customer`, (err, rows) => {
            if(err) res.send(err);
            res.send(rows);
        }
    )
})



app.listen(port, () => console.log(`Listening on port ${port}`));

