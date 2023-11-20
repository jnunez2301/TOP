SELECT ur.exercise_id, ur.user_id, e.exercise_name, u.user_handle, ur.routine_name
FROM user_routines ur
JOIN exercises e ON ur.exercise_id = e.exercise_id
JOIN users u ON ur.user_id = u.user_id
WHERE u.user_handle = 'roxc';