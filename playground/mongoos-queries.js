const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '589a7679dbff071d2f4947ff';

Todo.find({
	_id: id
}).then((todos) => {
  console.log('Todos', todos);
});