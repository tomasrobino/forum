function getCategory(req, res) {
  res.send(DBCategoryData(req.params.cat));
}


function DBCategoryData(category) {
  // TODO: Implement real db connection
  const categories = require('../data/dummy').categories;
  return categories.find(cat => cat.urlName === category);
}


module.exports = getCategory;