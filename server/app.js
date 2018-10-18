require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const { DBURL } = process.env;
mongoose.Promise = Promise;
mongoose
    .connect(DBURL)
    .then(() => {
        console.log(`Connected to Mongo on ${DBURL}`)
    }).catch(err => {
        console.error('Error connecting to mongo', err)
    });

const app = express();

const whitelist = [
    'http://localhost:3000',
    'https://battuta-mapno.herokuapp.com',
    'http://localhost:3010'

];
const corsOptions = {
    origin: function (origin, callback) {
        const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use(session({
    secret: 'react auth passport secret shh',
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 2419200000
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport')(app);

app.use(express.static(path.join(__dirname, 'public')));

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

const routeRouter = require('./routes/routes');
app.use('/api/route', routeRouter);

app.use((req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;