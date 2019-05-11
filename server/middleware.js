const express = require('express');

const printTime = (req, res, next) => {
    console.log('Time is: ', new Date())
    next();
  }

const bodyParser = express.json();

module.exports.bodyParser = bodyParser;
module.exports.printTime = printTime;
