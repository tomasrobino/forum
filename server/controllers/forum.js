function getCategory(req, res) {
  res.send(req.params.cat);
}

module.exports = getCategory;