const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Message = require('./messageModel.js')

mongoose.connect('mongodb://antoafarian:hello123@ds139198.mlab.com:39198/soloproject');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.status(200).set('Content-Type', 'application/json').sendFile(path.resolve(__dirname + '/../index.html'));
})

app.get('/login', (req, res) => {
  Message.find((err, msgs) => {
    if (err) console.log(err);
    else console.log('msgs',msgs);
    res.send(msgs);
  });
});

app.post('/messages', function(req, res) {
  console.log('in /message post');
  Message.create(req.body, (err, msg) => {
    if (err) console.log(err);
    // else console.log(msg);
  })
  // res.json(req.body);
  
})



app.listen(3000);