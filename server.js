const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const authRouter = require('./route/authRouter');
const blogRouter = require('./route/blogRouter');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                           // parse application/json
app.use(session({ secret: 'test' }));
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/blogs', blogRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
