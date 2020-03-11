var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/signup', function (req, res, next) {
    db.initialize('Users', function (dbCollection) {
        dbCollection.insertOne(req.body, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    }, function (err) {
        throw (err);
    });
    next();
});

router.post('/login', (req, res) => {
    db.initialize('Users', (dbColection) => {
        dbColection.findOne({ email: req.body.email, password: req.body.password }, (err, result) => {
            if (err) return res.send(null);
            return res.send(result);
        })
    });
})


module.exports = router;