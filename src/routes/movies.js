const { Router } = require('express');
var bodyParser = require('body-parser')
const router = Router();
const _ = require('underscore');

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

router.put('/:id', jsonParser, (req, res) => {
    const { id } = req.params;
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating)
    {
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        
        res.json(movies);
    }
    else{
        res.status(500).json({error: 'There was and error'});
    }
});

router.delete('/:id', jsonParser, (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if(movie.id == id){
            movies.splice(i,1);
        }
    });
    
    res.send(movies);
});

module.exports = router;