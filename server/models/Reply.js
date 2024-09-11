const {model, Schema} = require("mongoose");
const {ObjectId} = require("mongodb");

const replySchema = new Schema({
  _id: ObjectId,
  text: String,
  timestamp: String,
  author: String,
});

const Reply = model('Reply', replySchema);
module.exports = {
  ReplySchema: replySchema,
  Reply: Reply
}