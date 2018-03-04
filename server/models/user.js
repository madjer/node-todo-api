const mongoose = require('mongoose');
const validator = require('validator') 
const jwt = require('jsonwebtoken');
const _ = require('lodash');

let UserSchema = new mongoose.Schema(
    {
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
    }
);

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
    user.tokens = user.tokens.concat([{access, token}]);
    return user.save().then(()=>{
        return token;
    });
};

UserSchema.methods.toJSON = function () {
    let user = this; 
    let userObject = user.toObject();
    return _.pick(userObject, ['_id', 'email']);
};

let User = mongoose.model('User', UserSchema);

module.exports = {User};