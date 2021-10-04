SELECT *
FROM `sakila`.`payment`;


-- Exercício 1

USE sakila;
DELIMITER $$

CREATE FUNCTION qtdePgtosFeitosPorId(customerId INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE pgtos INT;
SELECT 
    COUNT(amount)
FROM
    payment
WHERE
    customer_id = customerId INTO pgtos;
RETURN pgtos;
END $$

delimiter ;

SELECT QTDEPGTOSFEITOSPORID(1);