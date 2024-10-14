const {Category} = require("../models/Category");
const {Post} = require("../models/Post");
const {ObjectId} = require("mongodb");
const mongoose = require("mongoose").default;


main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGODB);
    console.log("DB connection status: "+ mongoose.connection.readyState);
}

async function getAllCategories(req, res) {
    const categories = await Category.find({});
    if (!categories || categories.length === 0) res.status(404).send({"error": "Categories not found"});
    const modifiedCategories = [];
    for (const category of categories) {
        modifiedCategories.push({...category._doc, timestamp: category.timestamp.toJSON()});
    }
    res.send(modifiedCategories);
}

async function getCategory(req, res) {
    const category = await Category.findOne({ urlName: req.params.cat });
    if (!category) res.status(404).send({"error": "Category not found"});
    res.send( {...category._doc, timestamp: category.timestamp.toJSON()} );
}

async function getPosts(req, res) {
    const category = await Category.findOne({ urlName: req.params.cat });
    if (!category) res.status(404).send({"error": "Invalid category"});
    const posts = await Post.find({ category: new ObjectId(category._id) });
    const modifiedPosts = [];
    for (const post of posts) {
        const modifiedReplies = [];
        for (const reply of post.replies) {
            modifiedReplies.push({...reply._doc, createdAt: reply.createdAt.toJSON(), updatedAt: reply.updatedAt.toJSON()});
        }
        modifiedPosts.push({...post._doc, replies: modifiedReplies, createdAt: post.createdAt.toJSON(), updatedAt: post.updatedAt.toJSON()});
    }
    res.send( modifiedPosts );
}

async function getSinglePost(req, res) {
    const post = await Post.findById(req.params.id);
    if (!post) res.status(404).send({"error":"Post not found"});
    const modifiedReplies = [];
    for (const reply of post.replies) {
        modifiedReplies.push({...reply._doc, createdAt: reply.createdAt.toJSON(), updatedAt: reply.updatedAt.toJSON()});
    }
    res.send({...post._doc, replies: modifiedReplies, createdAt: post.createdAt.toJSON(), updatedAt: post.updatedAt.toJSON()});
}

module.exports = {
    getAllCategories,
    getCategory,
    getPosts,
    getSinglePost
};