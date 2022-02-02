const { Router } = require('express');
var bodyParser = require('body-parser')
const router = Router();

const movies = require('../sample.json');

// create application/json parser
var jsonParser = bodyParser.json()

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', jsonParser, (req, res) => {
    console.log(req.body);
    res.send("recieved");
});

module.exports = router;