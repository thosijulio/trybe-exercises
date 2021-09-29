-- Exercício 1
SELECT 
    first_name, last_name
FROM
    sakila.actor 
UNION ALL SELECT 
    first_name, last_name
FROM
    sakila.staff;