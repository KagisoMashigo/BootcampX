 
select distinct teachers.name as teacher, cohorts.name as cohort, count(assistance_requests) as total_assistances 
from teachers
join assistance_requests on teacher_id = teachers.id
join students on student_id = students.id 
join cohorts on cohort_id = cohorts.id
where cohorts.name = 'JUL02'
group by teachers.name, cohorts.name 
order by teacher; 