const express = require('express');
const {getPosts, getCategory, getSinglePost, getAllCategories, reply, post} = require("./controllers/forum");
const { getUser, login, register} = require("./controllers/users");
const router = express.Router();


router.get('/forum/categories', getAllCategories);
router.get('/forum/category/:cat', getCategory);
router.get('/forum/category/:cat/posts', getPosts);
router.get('/forum/category/:cat/post/:id', getSinglePost);

router.get("/forum/users/:user", getUser);


router.post("/forum/posting/reply", reply);
router.post("/forum/posting/post", post);

router.post("/forum/users/login", login);
router.post("/forum/users/register", register);

module.exports = router;
