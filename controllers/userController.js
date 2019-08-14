const Users = require('../models/Users');

async function getAllItem() {
  const result = await Users.find();
  return result || null;
}

module.exports = { getAllItem };
