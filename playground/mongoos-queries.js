const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '589a7679dbff071d2f4947ff11';


// if (!ObjectID.isValid(id)) {
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id ='589a0c75a63446fb22a36c07'

if (!ObjectID.isValid(id)) {
	console.log('Id not valid');
}

User.findById(id).then((User) => {
	if (!User) {
		return console.log('User not found');
	}
	console.log('User by Id', User);
}).catch((e) => console.log(e));