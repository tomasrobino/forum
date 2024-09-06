import {model, Schema} from "mongoose";
import {ObjectId} from "mongodb";
import Post from "./Post";

const categorySchema = new Schema({
  _id: ObjectId,
  urlName: String,
  title: String,
  description: String,
  posts: [Post]
});

const Category = model('Blog', categorySchema);
module.exports = {
  Category: Category
}