const express = require('express');
const passport = require('passport');
const cors = require('cors');
const session = require('express-session');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
const app = express();
const db = require('./config/mongoose');


app.use(cors());

// initialize passport
app.use(passport.initialize());



// add middlewares to parse json and url-encoded data
app.use(express.json());
app.use(express.urlencoded());

app.use(session({
    name: 'evotech',
    secret: 'global',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    // store: new MongoStore(
    //     {
    //         mongoUrl: db,
    //         autoRemove: 'disabled'
    //     },
    //     function(err){
    //         console.log(err || 'connect-mongo setup ok');
    //     }
    // )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use('/', require('./routes'));

app.listen(8000, function(err){
    if(err){
        console.error('Error in connecting to server', err);
    }
    console.log('Connected to port : ', 8000);
});