const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;
const validator = require('validator');
const UserSchema  = new Schema({
    googleId: String,
    name: String,
    emails: {type:String,unique:false,required:true},
    // emails: {
    //     type:String,
    //     required: true,
    //     trim: true,
    //     unique: true,
    //     lowercase: true,
    //     max: 65,
    //     validator: value =>{
    //         if(!validator.isEmail(value)){
    //             throw new Error({error: "invalid Email address"});
    //         }
    //     }
    // },
    credits: { type: Number, default: 0 }
});

mongoose.model('users',UserSchema);

