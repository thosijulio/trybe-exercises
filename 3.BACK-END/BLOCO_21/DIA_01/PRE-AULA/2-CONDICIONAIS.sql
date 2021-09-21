USE sakila;

-- Exercício 1
SELECT film_id, title, 
IF (title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'Conheço o filme?'
FROM sakila.film;

-- Exercício 2