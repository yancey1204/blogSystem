const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const { blog } = require('./service/blog');
const { auth } = require('./service/authentication');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                           // parse application/json
app.use(session({
  secret: 'test',
}));


app.post('/register', (req, res, next) => {
  auth.registerNewUser(req.body.displayName, req.body.username, req.body.password, (error) => {
    if (error != null) {
      res.send(error);
    } else {
      res.send('hello');
    }
    next();
  });
});

app.get('/test', (req, res, next) => {
  const ss = req.session;
  const sid = req.sessionID;
  const hour = 3600000;

  ss.cookie.expires = new Date(Date.now() + hour);
  ss.cookie.maxAge = hour;
  if (ss.views) {
    ss.views++;
  } else {
    ss.views = 1;
  }
  console.log(`sid ${sid}`);
  console.log(ss);
  res.send('hello');
  next();
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
