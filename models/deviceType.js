var mysql = require('./mysql');

getDeviceType = function (params, callback) {
  mysql.get('devicetype', params, function (err, result){

  }) 
};
