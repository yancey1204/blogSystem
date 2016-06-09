const express = require('express');
const router = express.Router();
const { blog } = require('../service/blog');


router.post('/createblog', (req, res) => {
  blog.createNewBlog(req.body.title, req.body.date, req.body.content, (error) => {
    console.log(req.body);
    if (error != null) {
      res.send(error);
    } else {
      res.send('ERROR');
    }
  });
});

router.get('/', (req, res) => {
  blog.getBlogs((result) => {
    console.log(`result ${result}`);
    res.send(result);
  });
});

module.exports = router;
