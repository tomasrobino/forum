const {posts, categories} = require("../data/dummy");
const {Category} = require("../models/Category");
const mongoose = require("mongoose").default;


main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB);
  console.log("DB connection status: "+ mongoose.connection.readyState);
  /*
  const categories = await Category.find({});
  for (let i = 0; i < categories.length; i++) {
    let counter = 0;
    const id = categories[i]._id;
    const posts = await Post.find({ category: id });
    counter += posts.length;
    for (const post of posts) {
      counter+= post.replies.length;
    }
    console.log(await Category.findByIdAndUpdate(id, { posts: counter }))
  }
  console.log("finished")

   */
}

async function getAllCategories(req, res) {
  res.send(await Category.find({}));
}

async function getCategory(req, res) {
  // TODO: Implement real db connection
  res.send( await Category.find({ urlName: req.params.cat }) );
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
  getAllCategories,
  getCategory,
  getPosts,
  getSinglePost
};