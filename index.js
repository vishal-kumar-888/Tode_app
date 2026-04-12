// here we will learn how MVC works in node js

// MVC stands for Model View Controller
// Model is the data layer
// View is the presentation layer
// Controller is the logic layer

// siple todo app using MVC


const express = require('express');

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});