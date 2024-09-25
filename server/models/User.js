const {model, Schema} = require("mongoose");

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    urlName: String,
    username: String,
    posts: Number,
    topics: Number,
}, { timestamps: true });

const User = model('User', userSchema);
module.exports = {
    User: User
}