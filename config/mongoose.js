const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://avindutt2369:6701v6lHWvtPYWBW@evoformdata.pobgthy.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to database'));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;