var mysql = require('./mysql');

getDeviceComm = function (params, callback) {
  mysql.getDevice(null, function (err, result){
    console.log(result);
  }) 
};
