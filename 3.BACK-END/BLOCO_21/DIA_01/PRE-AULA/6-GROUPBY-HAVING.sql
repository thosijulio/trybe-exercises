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

-- Exercício 3

-- Exercício 4

-- Exercício 5

-- Exercício 6
SELECT * FROM sakila.customer;
