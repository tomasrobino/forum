import {model, Schema} from "mongoose";
import {ObjectId} from "mongodb";
import Reply from "./Reply";

const postSchema = new Schema({
  _id: ObjectId,
  title: String,
  text: String,
  timestamp: String,
  author: String,
  views: Number,
  replyAmount: Number,
  replies: [Reply]
});

const Post = model('Post', postSchema);
module.exports = {
  Post: Post
}