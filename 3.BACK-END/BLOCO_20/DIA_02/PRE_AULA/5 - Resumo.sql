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
SELECT COUNT(DISTINCT(last_name)) FROM sakila.actor;