const mongoose = require('mongoose');
const validator = require('validator');


const emailValidator = [
  (val) => validator.isEmail(val),
  'Email is incorrect format',
];
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: 'Username is required',
  },
  fullname: {
    type: String,
    require: 'Fullname is required',
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    require: 'Email is required',
    validate: emailValidator,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model('Users', UserSchema);
