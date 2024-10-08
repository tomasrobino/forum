const {model, Schema} = require("mongoose");
const {ReplySchema} = require("./Reply");

const postSchema = new Schema({
  _id: Schema.Types.ObjectId,
  category: Schema.Types.ObjectId,
  title: String,
  text: String,
  author: String,
  views: Number,
  replyAmount: Number,
  replies: [ReplySchema]
}, { timestamps: true, versionKey: false });

const Post = model('Post', postSchema);
module.exports = {
  PostSchema: postSchema,
  Post: Post
}