const express = require('express');
const getCategory = require("./controllers/forum");
const categories = require("./data/dummy").categories;
const router = express.Router();

//GET forum categories
router.get('/forum/categories', function(req, res) {
  res.send(categories);
});

router.get('/forum/category/:cat', getCategory);

module.exports = router;
