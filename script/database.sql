CREATE DATABASE homemanager;
use homemanager;

CREATE TABLE devicetype(
    deviceTypeId        INTEGER         AUTO_INCREMENT PRIMARY KEY,
    code                VARCHAR(100)    NOT NULL,
    name                VARCHAR(100)    NOT NULL,
    description         TEXT            
)ENGINE=InnoDB;

CREATE TABLE device(
    deviceId            INTEGER         AUTO_INCREMENT PRIMARY KEY,
    deviceTypeId        INTEGER         ,
    code                VARCHAR(100)    NOT NULL,
    status              VARCHAR(100)    ,
    FOREIGN KEY (deviceTypeId) REFERENCES devicetype(deviceTypeId)
)ENGINE=InnoDB;

CREATE TABLE devicecomm(
    deviceCommId        INTEGER         AUTO_INCREMENT PRIMARY KEY,
    deviceId            INTEGER         NOT NULL,
    communicationStr    TEXT            ,
    communicationType   VARCHAR(100)    ,
    functions           LONGTEXT        NOT NULL,
    FOREIGN KEY (deviceId) REFERENCES device(deviceId)
)ENGINE=InnoDB;

CREATE TABLE log(
    logId               INTEGER         AUTO_INCREMENT PRIMARY KEY,
    deviceId            INTEGER         NOT NULL,
    message             LONGTEXT        NOT NULL,
    level               INTEGER         NOT NULL,
    createdAt           DATETIME        NOT NULL,
    FOREIGN KEY (deviceId) REFERENCES device(deviceId)
)ENGINE=InnoDB;