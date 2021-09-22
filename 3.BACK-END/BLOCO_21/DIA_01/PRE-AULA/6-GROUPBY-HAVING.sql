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
SELECT district, COUNT(address) FROM sakila.address GROUP BY district ORDER BY COUNT(address) DESC;

-- Exercício 5
SELECT rating, AVG(length) FROM sakila.film GROUP BY rating HAVING AVG(length) BETWEEN 115.0 AND 121.50 ORDER BY AVG(length) DESC;

-- Exercício 6
SELECT rating, SUM(replacement_cost) sum_replacement_cost FROM sakila.film GROUP BY rating HAVING sum_replacement_cost > 3950.50 ORDER BY sum_replacement_cost;
