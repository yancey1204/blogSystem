const { auth } = require('./service/authentication');
const { blog } = require('./service/blog');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                           // parse application/json

app.post('/register', (req, res, next) => {
  auth.registerNewUser(req.body.displayName, req.body.username, req.body.password, (error) => {
    console.log(req.body);
    if (error != null) {
      res.send(error);
    } else {
      res.send('hello');
    }
    next();
  });
});


app.post('/createblog', (req, res, next) => {
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


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
