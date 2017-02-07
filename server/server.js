var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('/db/mongoose');
var {Todo} = requier('./models/todo');
var {User} = require('./models/user');

var app = express();

app.listen(3000, () => {
	console.log('Started on port 3000');
});

// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//    console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo')
// });

// var newTodo = new Todo({
// 	text: 'Work out',
// 	completed: false,
// 	completedAt: 0.00,
// });

// newTodo.save().then((doc) => {
//    console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo')
// });



// var newUser = new User({
// 	email: 'text@gmail.com',
   
// });


// newUser.save().then((doc) => {
//    console.log('Saved User', doc);
// }, (e) => {
// 	console.log('Unable to save User')
// });