var express = require('express');
var router = express.Router();

//GET forum categories


//Only for testing purposes
const categories = [
  {
    title: "a",
    desc: "b",
    lastPost: "c",
    timestamp: "d",
    user: "e",
    topics: 1,
    posts: 2
  },
  {
    title: "f",
    desc: "g",
    lastPost: "h",
    timestamp: "i",
    user: "j",
    topics: 3,
    posts: 4
  }
]


router.get('/forum/categories', function(req, res) {
  res.send(categories);
});

module.exports = router;
