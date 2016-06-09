const sqlite = require('sqlite3').verbose();
const blogService = require('../db/blogService');
const db = new sqlite.Database('./blog.db');

const blog = {
  createNewBlog: (title, date, content, callback) => {
    db.get(blogService.getTitle, title, date, content, (err, row) => {
      if (!row) {
        db.run(blogService.insertBlog, title, date, content, '');
      } else { callback(`${row.title} already exists`); }
    });
  },

  getBlogs: (userId, callback) => {
    db.get(blogService.getBlogs, (err, rows) => {
      console.log(333);
      console.log(`err ${err}`);
      console.log(`rows ${rows}`);
      if (rows) {
        callback(rows);
      }
    });
  },
};

module.exports = { blog };
