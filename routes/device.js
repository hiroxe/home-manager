var express = require('express');
var router = express.Router();
var device = require('../models/device')

router.get('/', function (req, res) {
    var params = {};
    device.getDevice(params, function (err, result){
        
    })
});
