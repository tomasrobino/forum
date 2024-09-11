const {model, Schema} = require("mongoose");
const {ObjectId} = require("mongodb");
const {PostSchema} = require("./Post");

const categorySchema = new Schema({
  _id: ObjectId,
  urlName: String,
  title: String,
  description: String,
  posts: [PostSchema]
});

const Category = model('Category', categorySchema);
module.exports = {
  Category: Category
}