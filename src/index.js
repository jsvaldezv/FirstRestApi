const express = require('express');
const app = express();
const morgan = require('morgan');

// SETTINGS 
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World');
});

// START SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});