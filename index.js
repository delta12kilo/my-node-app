const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// name of app is "app"
const app = express();
require('./routes/authRoutes')(app);

//mongo connection
mongoose.connect(keys.mongoURI);
// console.log('connect');
//////////////////////////////
const PORT = process.env.PORT || 5000;
app.listen(PORT);


