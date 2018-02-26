const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5a948cb2a59de624c4879e4c';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
});

Todo.findById(id).then((todoById) => {
    console.log('TodoById', todoById)
}).catch((e) => {console.log(e)});

let userId = '5a9340f5c97959370442dac6';

if (!ObjectID.isValid(userId)) {
    console.log('ID not valid');
}

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 4));
}, (err) => {
    console.log(err);
})
