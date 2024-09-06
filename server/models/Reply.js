import {model, Schema} from "mongoose";
import {ObjectId} from "mongodb";

const replySchema = new Schema({
  _id: ObjectId,
  text: String,
  timestamp: String,
  author: String,
});

const Reply = model('Reply', replySchema);
module.exports = {
  Reply: Reply
}