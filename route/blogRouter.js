const express = require('express');
const router = express.Router();
const { blog } = require('../service/blog');


router.post('/createblog', (req, res, next) => {
  blog.createNewBlog(req.body.title, req.body.date, req.body.content, (error) => {
    console.log(req.body);
    if (error != null) {
      res.send(error);
    } else {
      res.send('ERROR');
    }
    next();
  });
});

router.get('/', (req, res, next) => {
  console.log(11111);
  blog.getBlogs((result) => {
    console.log(222);
    console.log(result);
    res.send(result);
  });
  next();
});

module.exports = router;
