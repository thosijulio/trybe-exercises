USE sakila;

ALTER TABLE category ADD FULLTEXT INDEX exercicio1(`name`);

-- Exercution Plan com index
SELECT * FROM category WHERE MATCH(`name`) AGAINST('action');

ALTER TABLE category DROP INDEX exercicio1;

-- Execution Plan sem index
SELECT * FROM category WHERE `name` LIKE '%action%';