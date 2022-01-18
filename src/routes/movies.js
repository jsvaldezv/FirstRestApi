const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

module.exports = router;