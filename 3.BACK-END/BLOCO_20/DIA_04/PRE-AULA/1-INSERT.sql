USE sakila;

select * from sakila.staff;

-- Exercício 1
INSERT INTO sakila.staff (staff_id, first_name, last_name, address_id, store_id, username)
VALUES (22, 'Julio', 'Thosi', 1, 2, 'thosijulio');

-- Exercício 2
INSERT INTO sakila.staff (staff_id, first_name, last_name, address_id, store_id, username)
VALUES (4, 'Ingrid', 'Castilho', 1, 2, 'castilhoingrid'), (5, 'Antonio', 'Thosi', 1, 2, 'thosiantonio');

-- Exercício 3
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

-- Exercício 4

-- Exercício 5
