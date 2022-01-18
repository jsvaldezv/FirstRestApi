const express = require('express');
const app = express();
const morgan = require('morgan');

// SETTINGS 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// ROUTES
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// START SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});