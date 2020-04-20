const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
// Pour autoriser l'accès au serveur node depuis à notre domaine que celui de node
app.use(cors());

// Starting application
app.listen(3003 , () => {
  console.log("Listening at : 3003");
});
