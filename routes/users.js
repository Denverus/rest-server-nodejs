var express = require('express');
var router = express.Router();

var users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.body);

    res.json( users );
});

router.post('/', function(req, res, next) {
    console.log(req.body);

    var user = req.body;

    users.push(user);
    res.json( user );
});


router.delete('/', function(req, res, next) {
    console.log(req.body);

    users = [];
    res.sendStatus(200);
});

module.exports = router;
