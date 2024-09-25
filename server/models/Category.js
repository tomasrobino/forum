const {model, Schema} = require("mongoose");

const categorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  urlName: String,
  title: String,
  description: String,
  posts: Number,
  topics: Number,
  timestamp: Schema.Types.Date
});

const Category = model('Category', categorySchema);
module.exports = {
  Category: Category
}