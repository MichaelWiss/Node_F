const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./..models/todo');

describe('Post /todos', () => {
	it('should create a new todo', (done) => {
     var text = 'test todo text';

     request(app)
	     .post('/todos')
	     .send({text})
         .expect(200)
	});
});