USE sakila;

-- Exercício 1:
SELECT CONCAT (title, ' - ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

-- Exercício 2:
SELECT CONCAT (title, ' - ', rating) AS Classificação FROM sakila.film;