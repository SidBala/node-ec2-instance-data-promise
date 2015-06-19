var Promise = require('bluebird');
var instance = Promise.promisifyAll(require("ec2-instance-data"));

exports = module.exports = instance;