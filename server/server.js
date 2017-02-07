var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
       type: String,
       required: true,
       minlength: 1,
       trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
        type: Number,
        default: null
	}
});

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//    console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo')
// });

var newTodo = new Todo({
	text: 'Work out',
	completed: false,
	completedAt: 0.00,
});

newTodo.save().then((doc) => {
   console.log('Saved todo', doc);
}, (e) => {
	console.log('Unable to save todo')
});

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
	}
});

var newUser = new User({
	email: 'text@gmail.com',
   
});


newUser.save().then((doc) => {
   console.log('Saved User', doc);
}, (e) => {
	console.log('Unable to save User')
});