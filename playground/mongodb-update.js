// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
	if (err) {
   return console.log('Unable to connect to MongoDB server');
   }
   console.log('Connected to MongoDB server');

   db.collection('Todos').findOneAndUpdate({
     _id: new ObjectID('5898ba7c06065ef144bc5ad1')
 }, {
     $set: {
     	completed: false
     }
    },{
    returnOriginal: false
 }).then((result) => {
 	console.log(result);
   });




   
   // db.close();
});