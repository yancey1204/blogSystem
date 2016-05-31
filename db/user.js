const user = {
  getUserId: `SELECT id FROM users
              WHERE  username = ? AND password = ?`,

  insertUser: `INSERT INTO users
                        (display_name, username, password, external_token, external_source, token)
              VALUES (?, ?, ?, ?, ?, ?)`,
};

module.exports = user;
