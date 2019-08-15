
const findAll = (req, res, next) => {
  let articles = req.app.locals.data.articles;
  return res.status(200).send({
    success: 'true',
    message: 'articles retrieved successfully',
    data: articles
  })
};

const findOne = (req, res, next) => {
  let articles = req.app.locals.data.articles;
  const id = parseInt(req.params.id, 10);
  let article = null;
  articles.forEach((item) => {
    if (item.id === id) {
      article = item
    }
  });
  if (article !== null) {
    return res.status(200).send({
      success: 'true',
      message: `article with id: ${id} retrieved successfully`,
      data: article
    });
  } else {
    return res.status(404).send({
      success: 'false',
      message: 'article does not exist',
    });
  }
};

const insertOne = (req, res, next) => {
  const article = req.body;
  return res.status(200).send({
    data: article
  });
};

module.exports = {
  findOne,
  findAll,
  insertOne
}