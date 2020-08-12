const express = require('express');
// import express from 'express';
const passport  = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
// name of app is "app"
const app = express();

passport.use(new googleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);


