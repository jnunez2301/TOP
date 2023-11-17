-- CONTAR FOLLOWERWS
SELECT COUNT(follower_id) AS followers FROM followers WHERE follower_id = 4;

-- TOP 3 USUARIOS CON MAYOR NÚMERO DE SEGUIDORES
SELECT following_id, COUNT(follower_id) AS followers
FROM followers
GROUP BY following_id
ORDER BY followers DESC
LIMIT 3;

-- TOP 3 USUARIOS CON JOIN
SELECT following_id, COUNT(follower_id) AS followers, users.user_id, users.user_handle
FROM followers
JOIN users ON users.user_id = followers.following_id
GROUP BY following_id
ORDER BY followers DESC
LIMIT 3;

-- CONSEGUIR TWEETS DE USUARIO

SELECT users.user_handle, tweet_text FROM tweets
JOIN users ON users.user_id = tweets.tweet_id;

-- ¿CUANTOS TWEETS HA HECHO UN USUARIO?

SELECT user_id, COUNT(*) AS tweet_count
FROM tweets
GROUP BY user_id;
