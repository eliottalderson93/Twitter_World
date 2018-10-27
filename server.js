// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/public/dist/public' ));

app.use(express.static( __dirname + '/static/'));
// Setting our Views Folder Directory
//DATABASE/MONGOOSE
//var mongoose = require('mongoose');
//var autoIncrement = require('mongoose-auto-increment');
//var options = {
//     socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 },
//     reconnectTries: Number.MAX_VALUE,
//     reconnectInterval: 1000
//   };
//mongoose.connect('mongodb://localhost:27017/intro', options);

// Use native promises
//mongoose.Promise = global.Promise;

// this route will be triggered if any of the routes above did not match
// app.use('proxyCall', (req,res) =>{

// });

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(3000, function() {
    console.log("listening on port 3000");
})