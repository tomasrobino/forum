const {model, Schema} = require("mongoose");
const {ObjectId} = require("mongodb");
const {ReplySchema} = require("./Reply");

const postSchema = new Schema({
  _id: ObjectId,
  title: String,
  text: String,
  timestamp: String,
  author: String,
  views: Number,
  replyAmount: Number,
  replies: [ReplySchema]
});

const Post = model('Post', postSchema);
module.exports = {
  PostSchema: postSchema,
  Post: Post
}