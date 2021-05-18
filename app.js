const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path')
require('dotenv').config();

const cors = require('cors')

const productRoutes = require("./api/routes/productRoutes");
const userRoutes = require("./api/routes/userRoutes");

mongoose.connect(
    "mongodb+srv://root:root@cluster0.hkqhf.mongodb.net/softDB?retryWrites=true&w=majority",
    {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    });



const corsOptions = {
    
};
mongoose.Promise = global.Promise;


app.use(morgan("dev"));
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));


// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/users", userRoutes);





module.exports = app;
