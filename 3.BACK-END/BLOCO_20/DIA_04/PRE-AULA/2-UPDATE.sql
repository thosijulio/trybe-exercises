USE sakila;
SET SQL_SAFE_UPDATES = 0;

-- Exercício 1
UPDATE actor SET first_name = 'JULES' WHERE first_name = 'JULIA';

-- Exercício 2
UPDATE category SET name = 'Science Fiction' WHERE name = 'Sci-Fi';

-- Exercício 3
UPDATE film SET rental_rate = 25 WHERE `length` > 100 AND replacement_cost > 20 AND rating IN ('G', 'PG', 'PG-13');

-- Exercício 4
