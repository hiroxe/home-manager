var express = require('express');
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var device = require('./routes/device');


var app = express();
app.use(cors());

// Configuration

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'web', ''))); // Public Web
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(express.static(path.join(__dirname, 'web/'))); // Public Web

// Routes
app.use('/device', device);
