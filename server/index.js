const express = require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser'); 
const cors = require('cors');
const postRouter = require('./routes/posts.js');

const app=express();
//app.use('/posts' , postRouter);
require('./db/conn');

//app.use(bodyParser.json({limit:"30mb", extended: true }));
//app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
//app.use(cors());





const PORT = process.env.PORT || 5000;




