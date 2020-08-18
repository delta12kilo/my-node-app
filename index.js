const express = require('express');
// import express from 'express';

require('./services/passport');


// name of app is "app"
const app = express();


require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);


