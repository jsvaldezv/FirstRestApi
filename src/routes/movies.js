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
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating)
    {
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        movies.push(newMovie)
        res.json(movies);
    }
    else{
        res.status(500).json({error: 'There was and error'});
    }

    res.send("recieved");
});

router.delete('/:id', (req, res) => {
    
});

module.exports = router;