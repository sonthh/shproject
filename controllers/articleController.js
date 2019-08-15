
const findAll = (req, res) => {
  const { articles } = req.app.locals.data;
  return res.status(200).send({
    success: 'true',
    message: 'articles retrieved successfully',
    data: articles,
  });
};

const findOne = (req, res) => {
  const { articles } = req.app.locals.data;
  const id = parseInt(req.params.id, 10);
  let article = null;
  articles.forEach((item) => {
    if (item.id === id) {
      article = item;
    }
  });
  if (article !== null) {
    return res.status(200).send({
      success: 'true',
      message: `article with id: ${id} retrieved successfully`,
      data: article,
    });
  }
  return res.status(404).send({
    success: 'false',
    message: 'article does not exist',
  });
};

const insertOne = (req, res) => {
  const article = req.body;
  return res.status(200).send({
    data: article,
  });
};

module.exports = {
  findOne,
  findAll,
  insertOne,
};
