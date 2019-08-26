const mongoose = require('mongoose');
// const validator = require('validator');

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    require: 'name is required',
  },
});

module.exports = mongoose.model('Category', CategorySchema);
