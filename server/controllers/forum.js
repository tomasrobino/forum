const {categories, posts} = require("../data/dummy");

function getCategory(req, res) {
  res.send(DBCategoryData(req.params.cat));
}


function DBCategoryData(category) {
  // TODO: Implement real db connection
  return categories.find(cat => cat.urlName === category);
}

function getPosts(req, res) {
  // TODO: Implement real db connection
  const category = Object.keys(posts).find(post => post === req.params.cat);
  res.send( posts[category] );
}

function getSinglePost(req, res) {
  // TODO: Implement real db connection
  for (const postArray of Object.values(posts)) {
    const post = postArray.find(post => post.id === req.params.id)
    if (post) {
      res.send(post);
      return;
    }
  }
  res.status(404).send({"error":"Post not found"});
}

module.exports = {
  getCategory,
  getPosts,
  getSinglePost
};