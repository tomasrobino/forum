const express = require('express');
const {getPosts, getCategory, getSinglePost, getAllCategories} = require("./controllers/forum");
const { getUser } = require("./controllers/users");
const router = express.Router();


router.get('/forum/categories', getAllCategories);
router.get('/forum/category/:cat', getCategory);
router.get('/forum/category/:cat/posts', getPosts);
router.get('/forum/category/:cat/post/:id', getSinglePost);

router.get("/forum/users/:user", getUser);

module.exports = router;
