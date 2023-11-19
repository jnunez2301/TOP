DROP DATABASE IF EXISTS twitter_db;

CREATE DATABASE twitter_db;

USE twitter_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id INT AUTO_INCREMENT,
    user_handle VARCHAR(50) NOT NULL UNIQUE,
    email_adress VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phonenumber CHAR(10) UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    PRIMARY KEY(user_id)
);

INSERT INTO users(user_handle, email_adress, first_name, last_name, phonenumber)
VALUES
('user1', 'user1@email.com', 'John', 'Doe', '1234567890'),
('user2', 'user2@email.com', 'Jane', 'Smith', '9876543210'),
('user3', 'user3@email.com', 'Alex', 'Johnusersfollowersson', '5555555555'),
('user4', 'user4@email.com', 'Emily', 'Davis', '1112223333'),
('user5', 'user5@email.com', 'Chris', 'Miller', '9998887777');

DROP TABLE IF EXISTS followers;

CREATE TABLE followers(
	follower_id INT NOT NULL,
    following_id INT NOT NULL,
    PRIMARY KEY(follower_id, following_id),
    FOREIGN KEY(follower_id) REFERENCES users(user_id),
    FOREIGN KEY(following_id) REFERENCES users(user_id)
);

ALTER TABLE followers
ADD CONSTRAINT check_follower_id
CHECK (follower_id != following_id);

INSERT INTO followers(follower_id, following_id)
VALUES
(1, 2),
(2, 1), 
(3, 1),  
(4, 1),
(4, 2);

DROP TABLE IF EXISTS tweets;

CREATE TABLE tweets(
	tweet_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    tweet_text VARCHAR(200) NOT NULL,
    num_likes INT DEFAULT 0,
    num_retweets INT DEFAULT 0,
    num_comments INT DEFAULT 0,
    created_at TIMESTAMP NOT  NULL DEFAULT (NOW()),
    foreign key (user_id) REFERENCES users(user_id),
    PRIMARY KEY (tweet_id)
);

INSERT INTO tweets(user_id, tweet_text)
VALUES
(1, 'Hello, Twitter! This is my first tweet. #Excited'),
(2, 'Just learned a new programming language today. Feeling accomplished! #Coding'),
(3, 'What iss your favorite book? I am looking for recommendations'),
(4, 'Enjoying a cup of coffee while working on my latest project. #Productivity');

DROP TABLE IF EXISTS  tweet_likes;

CREATE TABLE tweet_likes(
	user_id INT NOT NULL,
    tweet_id INT NOT NULL,
    foreign key(user_id) REFERENCES users(user_id),
    foreign key(tweet_id) references tweets(tweet_id),
    primary key (user_id, tweet_id)
);

INSERT INTO tweet_likes (user_id, tweet_id)
VALUES (1,3), (1,4);


-- TRIGGERS LIKE LISTENERS
DELIMITER $$
DROP TRIGGER IF EXISTS increase_follower_count;

CREATE TRIGGER increase_follower_count
	AFTER INSERT ON followers
    FOR EACH ROW
    BEGIN
		UPDATE users SET follower_count = follower_count + 1
        WHERE user_id = NEW.following_id;
    END $$
DELIMITER ;

