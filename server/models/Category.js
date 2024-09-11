const {model, Schema} = require("mongoose");
const {PostSchema} = require("./Post");

const categorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  urlName: String,
  title: String,
  description: String,
  posts: [PostSchema]
});

const Category = model('Category', categorySchema);
module.exports = {
  Category: Category
}