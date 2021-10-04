USE sakila;

-- Exercício 1

DELIMITER $$

CREATE PROCEDURE mostraAtoresPopulares()
BEGIN
SELECT actor_id, COUNT(*) AS qtdeFilmes FROM film_actor GROUP BY actor_id ORDER BY qtdeFilmes DESC LIMIT 10;
END $$

DELIMITER ;

CALL mostraAtoresPopulares();

-- Exercício 2

USE sakila;

DELIMITER $$

CREATE PROCEDURE()
BEGIN
END $$

DELIMITER ;