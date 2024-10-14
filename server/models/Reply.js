const {model, Schema} = require("mongoose");

const replySchema = new Schema({
  _id: Schema.Types.ObjectId,
  text: String,
  author: String,
  parent: Schema.Types.ObjectId
}, { timestamps: true, versionKey: false });

const Reply = model('Reply', replySchema);
module.exports = {
  ReplySchema: replySchema,
  Reply: Reply
}