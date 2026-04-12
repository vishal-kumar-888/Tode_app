/* const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/todoapp')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

module.exports = mongoose; */

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todoapp');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;