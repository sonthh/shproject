const Users = require('../models/user');

async function getAllItem() {
  const result = await Users.find();
  return result || null;
}

module.exports = { getAllItem };
