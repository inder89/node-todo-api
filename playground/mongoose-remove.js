const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5c70f1a2c303415ccd8e8b0a').then((todo) => {
    console.log(todo);
});