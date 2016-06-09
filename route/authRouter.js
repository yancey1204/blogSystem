const express = require('express');
const router = express.Router();
const { auth } = require('../service/authentication');

router.get('/test', (req, res, next) => {
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
  console.log('Cookies: ', req.cookies);
  res.send('hello');
  next();
});

router.post('/register', (req, res, next) => {
  auth.registerNewUser(req.body.displayName, req.body.username, req.body.password, (error) => {
    if (error != null) {
      res.send(error);
    } else {
      res.send('hello');
    }
    next();
  });
});

module.exports = router;
