const express = require('express');
const passport = require('passport');
const cors = require('cors');
// const JwtStrategy = require('passport-jwt').Strategy;``
// const ExtractJwt = require('passport-jwt').ExtractJwt;

const app = express();
const dotenv = require('dotenv');

app.use(cors());

// load env variables to the file
dotenv.config();

// initialize passport
app.use(passport.initialize());

const db = require('./config/mongoose');

// add middlewares to parse json and url-encoded data
app.use(express.json());
app.use(express.urlencoded());

app.use('/', require('./routes'));

app.listen(8000, function(err){
    if(err){
        console.error('Error in connecting to server', err);
    }
    console.log('Connected to port : ', 8000);
});