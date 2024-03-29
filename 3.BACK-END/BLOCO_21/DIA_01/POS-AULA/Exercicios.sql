-- Exercício 1
SELECT MAX(SALARY) FROM hr.employees;

-- Exercício 2
SELECT (MAX(SALARY) - MIN(SALARY)) FROM hr.employees;

-- Exercício 3
SELECT JOB_ID, ROUND(AVG(SALARY), 2) AS SALARY_PER_JOB_ID FROM hr.employees GROUP BY JOB_ID ORDER BY SALARY_PER_JOB_ID DESC;

-- Exercício 4
SELECT SUM(SALARY) FROM hr.employees;

-- Exercício 5
SELECT MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY), 2) FROM hr.employees;

-- Exercício 6
SELECT JOB_ID, COUNT(*) FROM hr.employees WHERE JOB_ID = 'IT_PROG';

-- Exercício 7
SELECT JOB_ID, ROUND(AVG(SALARY), 2) AS SALARY_COST FROM hr.employees GROUP BY JOB_ID;

-- Exercício 8
SELECT JOB_ID, ROUND(AVG(SALARY), 2) AS SALARY_COST FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = 'IT_PROG';

-- Exercício 9
SELECT JOB_ID, ROUND(AVG(SALARY), 2) AS AVG_SALARY FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID != 'IT_PROG' ORDER BY AVG_SALARY DESC;

-- Exercício 10
SELECT JOB_ID, AVG(SALARY) AS AVG_SALARY, COUNT(*) AS EMPLOYEES_COUNT FROM hr.employees GROUP BY DEPARTMENT_ID HAVING EMPLOYEES_COUNT > 10;

-- Exercício 11
UPDATE hr.employees SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777') WHERE PHONE_NUMBER LIKE '515%';

-- Exercício 12
SELECT * FROM hr.employees WHERE CHAR_LENGTH(first_name) >= 8;

-- Exercício 13
SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;

-- Exercício 14
SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;

-- Exercício 15
SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;

-- Exercício 16
SELECT UCASE(CONCAT(first_name, ' ', last_name)) FROM hr.employees;

-- Exercício 17
SELECT last_name, hire_date FROM hr.employees WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

-- Exercício 18
SELECT first_name, last_name, DATEDIFF(NOW(), hire_date) FROM hr.employees;
