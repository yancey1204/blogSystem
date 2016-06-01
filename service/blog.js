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
};

module.exports = { blog };
