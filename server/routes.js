const express = require('express');
const {getPosts, getCategory, getSinglePost} = require("./controllers/forum");
const categories = require("./data/dummy").categories;
const router = express.Router();

//GET forum categories
router.get('/forum/categories', function(req, res) {
  res.send(categories);
});

router.get('/forum/category/:cat', getCategory);

router.get('/forum/category/:cat/posts', getPosts)

router.get('/forum/post/:id', getSinglePost)

module.exports = router;
