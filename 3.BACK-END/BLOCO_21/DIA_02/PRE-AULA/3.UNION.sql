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
(SELECT first_name FROM sakila.actor ORDER BY actor_id DESC LIMIT 5)
UNION (SELECT first_name FROM sakila.staff LIMIT 1) UNION (SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15) ORDER BY first_name;

-- Exercício 4
