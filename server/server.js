// ««««««««« modules »»»»»»»»»
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const request = require('request');
// const AppService = require('./AppService');
const data = require('./../data/sampleData');

// ««««««««« configuration »»»»»»»»»
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

// ««««««««« routes »»»»»»»»»
app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.post('/query', function(req, res) {
  // AppService.fetch(req.body)
    // .then(function(data) {
    //   res.json(data);
    // })
    // .error(function(error) {
    //   res.send(error);
    // })
  res.json(data);
});

// ««««««««« start app  »»»»»»»»»
app.listen(port, function() {
  console.log('Listening on port ', port);
});
