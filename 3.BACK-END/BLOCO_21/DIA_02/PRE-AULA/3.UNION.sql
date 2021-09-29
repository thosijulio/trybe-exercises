-- Exercício 1
SELECT 
    first_name, last_name
FROM
    sakila.actor 
UNION ALL SELECT 
    first_name, last_name
FROM
    sakila.staff;
    
-- Exercício 2
SELECT 
    first_name
FROM
    sakila.customer
WHERE
    first_name LIKE '%TRACY%' 
UNION SELECT 
    first_name
FROM
    sakila.actor
WHERE
    first_name LIKE '%JE%';

-- Exercício 3

-- Exercício 4
