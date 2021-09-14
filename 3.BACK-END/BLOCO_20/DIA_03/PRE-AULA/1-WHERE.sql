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
SELECT title, description, release_year, replacement_cost
FROM sakila.film
WHERE rating <> 'NC-17'
AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- Exercício 4

-- Exercício 5

-- Exercício 6