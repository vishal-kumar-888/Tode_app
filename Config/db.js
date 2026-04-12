const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/todoapp')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;