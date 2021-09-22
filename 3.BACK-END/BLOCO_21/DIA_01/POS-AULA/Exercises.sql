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

-- Exercício 11

-- Exercício 12

-- Exercício 13

-- Exercício 14

-- Exercício 15

-- Exercício 16

-- Exercício 17

-- Exercício 18