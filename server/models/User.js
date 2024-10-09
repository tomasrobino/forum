const {model, Schema} = require("mongoose");

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: String,
    token: String,
    email: String,
    avatar: Schema.Types.Buffer,
    posts: Number,
    topics: Number,
}, { timestamps: true, versionKey: false });

const User = model('User', userSchema);
module.exports = {
    User: User
}