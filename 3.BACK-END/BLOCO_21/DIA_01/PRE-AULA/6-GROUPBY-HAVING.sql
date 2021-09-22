USE sakila;

-- Exercício 1
SELECT
  CASE
    WHEN `active` = 1 THEN 'Ativo'
    WHEN `active` = 0 THEN 'Inativo'
	ELSE 'Desconhecido'
  END AS 'Ativo',
  COUNT(active)
FROM sakila.customer GROUP BY active;

-- Exercício 2
SELECT store_id, `active`, COUNT(active) FROM sakila.customer GROUP BY store_id, active;

-- Exercício 3
SELECT rating, AVG(rental_duration) FROM sakila.film GROUP BY rating ORDER BY AVG(rental_duration) DESC;

-- Exercício 4

-- Exercício 5

-- Exercício 6
SELECT * FROM sakila.customer;
