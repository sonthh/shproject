const mongoose = require('mongoose');
const validator = require('validator');


const emailValidator = [
  (val) => validator.isEmail(val),
  'Email is incorrect format',
];

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: 'Username is required',
  },
  fullname: {
    type: String,
    required: 'Fullname is required',
  },
  password: {
    type: String,
    required: 'Password is required',
  },
  email: {
    type: String,
    required: 'Email is required',
    validate: emailValidator,
  },
  role: {
    type: String,
    required: 'Role is required',
  },
});

module.exports = mongoose.model('Users', UserSchema);
