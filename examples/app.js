
var express = require('express');

var path = require('path');



var app = express();
app.use(express.static(path.join(__dirname, 'www')));



app.get('/', function (req, res) {
  res.sendFile(path.resolve('www/index.html'));
});


if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message );

  });
}

app.use(function (err, req, res, next) {
  res.status(500).send({ error: err.message });

});






module.exports = app;
