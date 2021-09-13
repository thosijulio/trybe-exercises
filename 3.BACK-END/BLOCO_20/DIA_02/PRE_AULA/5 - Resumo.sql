USE sakila;

-- Parte 1

-- Exercício 1
SELECT * FROM sakila.film;

-- Exercício 2
SELECT title, release_year, rating FROM sakila.film;

-- Exercício 3
SELECT COUNT(*) FROM sakila.film;

-- Parte 2

-- Exercício 1
SELECT DISTINCT(last_name) FROM sakila.actor;

-- Exercício 2
SELECT COUNT(DISTINCT(last_name)) FROM sakila.actor;

-- Exercício 3
SELECT * FROM sakila.actor ORDER BY last_name DESC, first_name;

-- Exercício 4
SELECT * FROM sakila.language WHERE name!='English';