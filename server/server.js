const express = require('express');
var db = require('./db');
const bodyParser = require('body-parser')
const path = require('path');
var cors = require('cors');
const app = express();
var userRoute = require('./routes/user');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use('/user', userRoute);

app.get("/saveuser", function (req, res) {
  db.initialize('Users', function (dbCollection) {
    dbCollection.find().toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  }, function (err) {
    throw (err);
  });
})

app.post("/postmessage", function (req, res) {
  db.initialize('ContactUs', function (dbCollection) {
    dbCollection.insertOne({ name: req.body.name, email: req.body.email, message: req.body.message },
      function (err, result) {
        if (err) throw err;
        res.send(result);
      });
  }, function (err) {
    throw (err);
  });
})

app.get('/getallmessages', function (req, res) {
  db.initialize('ContactUs', function (dbCollection) {
    dbCollection.find({}).toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  }, function (err) {
    throw (err);
  });
})

app.listen(process.env.PORT || 8080);
