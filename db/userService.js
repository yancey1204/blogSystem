const user = {
  getUsername: `SELECT username FROM users
              WHERE  username = ? AND password = ?`,

  insertUser: `INSERT INTO users
                        (display_name, username, password, external_token, external_source, token)
              VALUES (?, ?, ?, ?, ?, ?)`,

  getUserId: `SELECT id FROM users
          WHERE username = ? AND password = ?`,
};

module.exports = user;
