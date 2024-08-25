var express = require('express');
var router = express.Router();

//GET forum categories


//Only for testing purposes
const categories = [
  {
    title: "afdgagdgeragerger",
    desc: "bqwswqzasaeaweaeaw",
    lastPost: "cp,o,phjjhopmkj,h",
    timestamp: "dtr89yrupt98r",
    user: "erewrew",
    topics: 1,
    posts: 2
  },
  {
    title: "freweqwsswd",
    desc: "gfsfsfwerewr",
    lastPost: "rewrewreh",
    timestamp: "idsffewrwerwer",
    user: "ewrewrewj",
    topics: 3,
    posts: 4
  }
]


router.get('/forum/categories', function(req, res) {
  res.send(categories);
});

module.exports = router;
