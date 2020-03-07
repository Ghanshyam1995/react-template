const express = require('express');
var db = require('./db');
const bodyParser = require('body-parser')
const path = require('path');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
const dbName = 'FashionHub';


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("/saveuser", function (req, res) {
  var data = req.body;
  db.initialize(dbName, 'Users', function (dbCollection) {
    dbCollection.find().toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  }, function (err) {
    throw (err);
  });
})

app.post("/postmessage", function (req, res) {
  db.initialize(dbName, 'ContactUs', function (dbCollection) {
    dbCollection.insertOne({ name: req.body.name, email: req.body.email, message: req.body.message },
      function (err, result) {
        if (err) throw err;
        res.send(result);
      });
  }, function (err) {
    throw (err);
  });
})

app.listen(process.env.PORT || 8080);