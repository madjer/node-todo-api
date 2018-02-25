let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
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

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 3,
        trim: true    
    }
});

// let newTodo = new Todo({
//     text: 'Pedir o jantar',
//     completed: false,
//     completedAt: null
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// })
let user = new User({
    email: 'madjerbo@gmail.com'
});
user.save().then((doc) => {
    console.log('User saved', doc);
}, (e) => {
    console.log('Unable to save user', e);
});