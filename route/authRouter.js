const express = require('express');
const router = express.Router();
const { auth } = require('../service/authentication');

function generateUid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function setSessCookie(res) {
  const _maxAge = 9000;
  const _sid = generateUid();
  const _option = {
    expires: new Date(Date.now() + _maxAge),
    httpOnly: true,
    maxAge: _maxAge,
  };

  res.cookie('SESSID', _sid, _option);
}

router.post('/register', (req, res, next) => {
  auth.registerNewUser(req.body.displayName, req.body.username, req.body.password, (error) => {
    if (error != null) {
      res.send(error);
    } else {
      setSessCookie(res);
      res.send('hello');
    }
    next();
  });
});

router.post('/login', (req, res) => {
  auth.login(req.body.username, req.body.password, (result) => {
    if (result) {
      res.send(result);
    }
  });
});

router.get('/test', (req, res) => {
  setSessCookie(res);
  console.log(req.cookies);
  res.send(req.cookies);
});

module.exports = router;
