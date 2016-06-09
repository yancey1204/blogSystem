CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  display_name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(255),
  PRIMARY KEY (id)
);
CREATE TABLE blogs (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(50),
  date DATETIME,
  content TEXT,
  user_id int,
  PRIMARY KEY (id)
)
