/* eslint-disable no-underscore-dangle */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Users = require('../models/User');
const config = require('../configs/index');

async function getAllItem() {
  const result = await Users.find();
  return result || null;
}
async function isExistUsername(username) {
  const result = await Users.findOne({ username });
  return result || null;
}
async function isExistEmail(email) {
  const result = await Users.findOne({ email });
  return result || null;
}
async function register(newUser) {
  if (await isExistUsername(newUser.username) !== null) throw new Error('Username is exist');
  if (await isExistEmail(newUser.email) !== null) throw new Error('Email is exist');
  return newUser.save();
}
async function login(username, password) {
  const user = await Users.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ userID: user._id }, config.secret);
    return {
      token,
      userLogin: user,
    };
  }
  throw new Error('Username or password is incorrect');
}

module.exports = {
  getAllItem,
  register,
  login,
};
