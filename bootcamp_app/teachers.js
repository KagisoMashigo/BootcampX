const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT DISTINCT
  teachers.name AS teacher,
  cohorts.name AS cohort
FROM teachers
LEFT OUTER JOIN assistance_requests ON teacher_id = teachers.id
LEFT OUTER JOIN students ON student_id = students.id
LEFT OUTER JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE UPPER($1)
ORDER BY teacher
`;

const cohortName = process.argv[2];
const values = [`%${cohortName}%`];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));



