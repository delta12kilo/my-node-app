const passport  = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
    done(null,user.id);
});


passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null,user);
    });
});



passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy : true
    },
    async (accesToken, refresh,profile,done)=>{
        const existingUser = await User.findOne({ googleId: profile.id })
        // console.log('profile',profile.emails);
                if(existingUser){
                   return done(null,existingUser);
                    //we already have user
                }                
                    //we dont have user with this id
                    const user = await new User({ googleId: profile.id,name:profile.displayName,emails:profile.emails[0].value }).save()
                        // .then(user => done(null,user));
                    done(null,user);  
        }
    )
);