CREATE TABLE routines (
    routine_id INT AUTO_INCREMENT,
    routine_name VARCHAR(100) NOT NULL,
    user_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (routine_id),
    FOREIGN KEY (user_id) REFERENCES user_routines(user_id)
);
