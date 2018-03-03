const mongoose = require('mongoose');
const validator = require('validator') 
let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
        unique: true,
        validade: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid e-mail'
        }   
    },
    password: {
        type: String,
        requeire: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type:String,
            requiered: true
        },
        token: {
            type: String,
            requiered: true
        }
    }]
});

module.exports = {User}