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
})


module.exports = router;