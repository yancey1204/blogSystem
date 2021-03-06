const blog = {
  getTitle: `SELECT title FROM blogs
              WHERE  title = ?`,

  insertBlog: `INSERT INTO blogs
                      (title, date, content, user_id)
              VALUES (?, ?, ?, ?)`,

  getBlogs: 'SELECT * FROM blogs',
};

module.exports = blog;
