SELECT id, name 
FROM students 
WHERE cohort_id = 1
ORDER BY name;

-- Your original answer
-- SELECT id, name
-- FROM students
-- ORDER BY cohort_id;

SELECT name, start_date, cohort.name as cohort_name, start_date
FROM students