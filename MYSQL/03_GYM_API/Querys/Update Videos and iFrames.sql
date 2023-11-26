SELECT  exercise_id, exercise_name, youtubeSrc FROM exercises WHERE exercise_id > 60 LIMIT 6;

UPDATE exercises
SET youtubeSrc = 'https://www.youtube.com/embed/duOt9wjXJGY'
WHERE exercise_id = 63 AND exercise_name = 'Bar Triceps Extensions';
