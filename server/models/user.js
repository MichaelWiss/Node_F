const mongoose = require('mongoose');
const validator = require('validator');



var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
        validator: (value) => {
        	return validator.isEmail(value);
        },
        message: '{VALUE} is not a valid email'
	}
  } 
});


module.exports = {User};