const express = require('express');
// import express from 'express';

// name of app is "app"
const app = express();

app.get('/',(req,res)=>{
    res.send({hi: 'there'});
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);


