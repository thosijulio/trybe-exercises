USE sakila;

-- Exercício 1
SELECT *
FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- Exercício 2
SELECT *
FROM sakila.customer
WHERE active IS NOT TRUE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name, last_name;

-- Exercício 3

-- Exercício 4

-- Exercício 5

-- Exercício 6