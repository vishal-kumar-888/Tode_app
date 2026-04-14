// here we will create the user model and export it to be used in other files
// and we will use mongoose to create the schema for the user model
// 
// and learn how to use mongoose to create a schema and model for the user and export it to be used in other files

// and vaildation for the user model and how to use it in the routes

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;