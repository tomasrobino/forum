const {model, Schema} = require("mongoose");

const replySchema = new Schema({
  _id: Schema.Types.ObjectId,
  text: String,
  timestamp: String,
  author: String,
});

const Reply = model('Reply', replySchema);
module.exports = {
  ReplySchema: replySchema,
  Reply: Reply
}