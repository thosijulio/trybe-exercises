USE sakila;

-- Exercício 1
INSERT INTO staff (staff_id, first_name, last_name, address_id, store_id, username)
VALUES (22, 'Julio', 'Thosi', 1, 2, 'thosijulio');

-- Exercício 2
INSERT INTO staff (staff_id, first_name, last_name, address_id, store_id, username)
VALUES (4, 'Ingrid', 'Castilho', 1, 2, 'castilhoingrid'), (5, 'Antonio', 'Thosi', 1, 2, 'thosiantonio');

-- Exercício 3
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

-- Exercício 4
SELECT * FROM category;
INSERT INTO category (`name`) VALUES ('Japanese'), ('French'), ('Italian');

-- Exercício 5
