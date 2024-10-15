const {Category} = require("../models/Category");
const {Post} = require("../models/Post");
const {ObjectId} = require("mongodb");
const {Reply} = require("../models/Reply");
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

async function reply(req, res) {
    const post = await Post.findById(req.body.parent);
    const reply = await new Reply();
    reply._id = new ObjectId();
    reply.parent = req.body.parent;
    reply.author = req.body.author;
    reply.text = req.body.text;
    post.replies.push({_id: reply._id, text: req.body.text, author: req.body.author});
    post.replyAmount++;
    try {
        await post.save();
    } catch (error) {
        res.status(500).send(error);
    }
    try {
        await reply.save();
        res.status(200).send(reply);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function post(req, res) {
    const post = await new Post();
    post._id = new ObjectId();
    post.author = req.body.author;
    post.text = req.body.text;
    post.title = req.body.title;
    post.views = 0;
    post.replyAmount = 0;
    const category = await Category.findOne({ urlName: req.body.category});
    if (!category) res.status(404).send({"error": "Category not found"});
    category.posts++;
    try {
        await category.save();
    } catch (err) {
        res.status(500).send(err);
    }
    post.category = new ObjectId(category._id);
    try {
        await post.save();
        res.status(200).send(post);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    getPosts,
    getSinglePost,
    reply,
    post
};