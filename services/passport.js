
const passport  = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},(accesToken, refresh,profile,done)=>{
        User.findOne({ googleId: profile.id }).then(existingUser => {
                if(existingUser){
                    done(null,existingUser);
                    //we already have user
                }
                else{
                    //we dont have user with this id
                    new User({ googleId: profile.id }).save()
                        .then(user => done(null,user));
                }
            });   
        }
    )
)