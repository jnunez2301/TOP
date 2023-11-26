SELECT * FROM routines;

UPDATE routines SET routine_alias = 'PPL' WHERE user_id = 3;

INSERT INTO routines(user_id, routine_name, routine_img, routine_description, uses_weights, routine_alias)
VALUES
(4, 'Bro Split | Weights','https://www.workoutforless.co.uk/cdn/shop/articles/luis-reyes-mTorQ9gFfOg-unsplash_2_640x.jpg?v=1657122621', 'A "bro split" typically refers to a weightlifting training split where you train different muscle groups on different days throughout the week.', 1, 'Bro Split');
