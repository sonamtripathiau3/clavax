const app = require('express')();
const express = require('express');

var http = require('http').Server(app);

const config = require("./config")
const cors = require('cors');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');

const MONGODB_URI = config.mongoUrl;

const router = require('./routes/router');

app.use(express.urlencoded({ extended: false }));
app.use(express.json())


app.use(cors())
app.use('/', router.init());

mongoose
  .connect(MONGODB_URI, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(res=>{
      console.log("connected to mongodb")
  })
  .then(result => {
    http.listen(port, () => {
      console.log('App is Running on ' + port );

    });
  })
  .catch(err => {
    console.log(err);
  });