
const findAll = (req, res, next) => {
  let categories = [
    {
      "id": "1",
      "name": "category1"
    },
    {
      "id": "2",
      "name": "category2"
    },
    {
      "id": "3",
      "name": "category3"
    },
  ];
  return res.status(200).send({
    success: 'true',
    message: 'articles retrieved successfully',
    data: categories
  })
};

const findOne = (req, res, next) => {
  let categoryId = req.params.id;
  let category = {
      "id": categoryId,
      "name": `category${categoryId}`
  };
  return res.status(200).send({
    success: 'true',
    message: 'articles retrieved successfully',
    data: category
  })
};

module.exports = {
  findAll,
  findOne
}