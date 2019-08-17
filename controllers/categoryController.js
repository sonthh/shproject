const Category = require('../models/Category');

const findAll = (req, res) => {
  Category.find().exec((err, categories) => res.status(200).send({
    success: 'true',
    message: 'category retrieved successfully',
    data: categories,
  }));
};

const findOneById = (req, res) => {
  const categoryId = req.params.id;
  Category.findById(categoryId).exec((err, category) => {
    if (category) {
      return res.status(200).send({
        success: 'true',
        message: 'category retrieved successfully',
        data: category,
      });
    }
    return res.status(200).send({
      success: 'false',
      message: 'category does not exist',
    });
  });
};


const insertOne = (req, res) => {
  const newCategory = new Category(req.body);
  return newCategory.save()
    .then((data) => res.status(200).json({ code: 200, data }))
    .catch((err) => res.status(400).json({ code: 400, err }));
};

const deleteOneById = (req, res) => {
  const categoryId = req.params.id;
  Category.findByIdAndDelete(categoryId).exec((err, category) => {
    if (category) {
      return res.status(200).send({
        success: 'true',
        message: 'delele ok',
        id: category.id,
      });
    }
    return res.status(200).send({
      success: 'false',
      message: 'category does not exist',
    });
  });
  const newCategory = new Category(req.body);
  return newCategory.save()
    .then((data) => res.status(200).json({ code: 200, data }))
    .catch((err) => res.status(400).json({ code: 400, err }));
};

module.exports = {
  findAll,
  findOneById,
  insertOne,
  deleteOneById,
};
