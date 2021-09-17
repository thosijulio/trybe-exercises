USE sakila;

SET SQL_SAFE_UPDATES = 0;

-- Exercício 1
DELETE FROM film_actor WHERE actor_id = (SELECT actor_id FROM actor WHERE first_name = 'KARL');
DELETE FROM actor WHERE first_name = 'KARL';

-- Exercicio 2
SELECT actor_id FROM actor WHERE first_name = 'MATTHEW';
DELETE FROM film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM actor WHERE first_name = 'MATTHEW';

-- Exercicio 3

-- Exercicio 4

-- Exercicio 5

-- Exercicio 6
