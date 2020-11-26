const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT
  teachers.name AS teacher,
  cohorts.name AS cohort
FROM teachers
LEFT OUTER JOIN assistance_requests ON teacher_id = teachers.id
LEFT OUTER JOIN students ON student_id = students.id
LEFT OUTER JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = UPPER('${process.argv[2]}')
ORDER BY teacher
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));