const {posts, categories} = require("../data/dummy");
const {Category} = require("../models/Category");
const {Post} = require("../models/Post");
const {ObjectId} = require("mongodb");
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
  const categories = await Category.find({});
  if (!categories || categories.length === 0) res.status(404).send({"error": "Categories not found"});
  res.send(categories);
}

async function getCategory(req, res) {
  const category = await Category.findOne({ urlName: req.params.cat });
  if (!category) res.status(404).send({"error": "Category not found"});
  res.send( category );
}

async function getPosts(req, res) {
  const category = await Category.findOne({ urlName: req.params.cat });
  if (!category) res.status(404).send({"error": "Invalid category"});
  const posts = await Post.find({ category: new ObjectId(category._id) });
  res.send( posts );
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