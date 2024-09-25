const {model, Schema} = require("mongoose");

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    profile: String,
    username: String,
    avatar: Schema.Types.Buffer,
    posts: Number,
    topics: Number,
}, { timestamps: true });

const User = model('User', userSchema);
module.exports = {
    User: User
}