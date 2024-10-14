const mongoose = require("mongoose").default;
const {User} = require("../models/User");
const bcrypt = require("bcryptjs");
const {ObjectId} = require("mongodb");

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGODB);
    console.log("DB connection status: "+ mongoose.connection.readyState);
}

async function getUser(req, res) {
    const user = await User.findOne({ username: req.params.user });
    if (!user) {
        res.status(404).send({"error": "User not found"});
        return user;
    }
    res.send({...user._doc, createdAt: user.createdAt.toJSON(), updatedAt: user.updatedAt.toJSON()});
}

async function login(req, response) {
    const user = await User.findOne({ username: req.body.username });
    await bcrypt.compare(req.body.password, user.token, (err, res) => {
        if (res) {
            response.status(200).send(user);
        } else response.sendStatus(403);
    });
}

async function register(req, response) {
    if (await User.findOne({ username: req.body.username })) {
        //Username already exists
        response.status(403).send({error: "Username already exists"});
    } else if (await User.findOne({ email: req.body.email})) {
        //Email already exists
        response.status(403).send({error: "Email already exists"})
    } else {
        //User doesn't exist, create user
        const data = req.body;
        const user = new User({ _id: new ObjectId(), email: data.email, username: data.username, posts: 0, topics: 0 });
        await bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(data.password, salt, async function (err, hash) {
                user.token = hash;
                await user.save();
                response.status(200).send(user);
            });
        });
    }
}

module.exports = {
    getUser,
    login,
    register
}