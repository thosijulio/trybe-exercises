USE sakila;

-- Exercício 1
SELECT a.actor_id, a.first_name, f.film_id FROM sakila.actor AS a
INNER JOIN film_actor AS f ON f.actor_id = a.actor_id;

-- Exercício 2
SELECT c.first_name, c.last_name, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON a.address_id = c.address_id;

-- Exercício 3

-- Exercício 4
