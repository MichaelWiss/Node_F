const {SHA256} = require('crypto-js');

var message = "I am user 7";

var hash = SHA256(message).toString();