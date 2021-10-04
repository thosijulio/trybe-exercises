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

-- Exercício 2

USE sakila;
DELIMITER $$

CREATE FUNCTION filmeVinculadoAInventario(inventory INT)
RETURNS VARCHAR(50) READS SQL DATA
	BEGIN
	DECLARE movie VARCHAR(50);
	SELECT 
		f.title
	FROM
		film AS f
			INNER JOIN
		inventory AS i ON f.film_id = i.film_id
	WHERE
		i.inventory_id = 1 INTO movie;
	RETURN movie;
END $$

DELIMITER ;

SELECT FILMEVINCULADOAINVENTARIO(1);

USE sakila;

-- Exercício 3
USE sakila;
DELIMITER $$

CREATE FUNCTION qtdeDeFilmeDaCategoria(categoria VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE qtdeFilmes INT;
	SELECT 
		COUNT(*)
	FROM
		film AS F
			INNER JOIN
		film_category AS FC ON FC.film_id = F.film_id
			INNER JOIN
		category AS C ON C.category_id = FC.category_id
	WHERE
		C.`name` = categoria INTO qtdeFilmes;
	RETURN qtdeFilmes;
END $$

DELIMITER ;

SELECT qtdeDeFilmeDaCategoria('Animation');
