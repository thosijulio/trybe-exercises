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

CREATE PROCEDURE mostrarFilmesComCategoria(IN categoria VARCHAR(30))
BEGIN
	SELECT 
    F.film_id, F.title, C.category_id, C.name
FROM
    film AS F
        INNER JOIN
    film_category AS FC ON FC.film_id = F.film_id
        INNER JOIN
    category AS C ON C.category_id = FC.category_id WHERE C.name = categoria;
END $$

DELIMITER ;

CALL mostrarFilmesComCategoria('Animation');

-- Exercício 3

USE sakila;

DELIMITER $$

CREATE PROCEDURE verificaStatusDoCliente(IN clientEmail VARCHAR(50), OUT clientStatus VARCHAR(20))
BEGIN
SELECT `active` INTO clientStatus FROM customer WHERE email = clientEmail;
END $$

DELIMITER ;

CALL verificaStatusDoCliente('MARY.SMITH@sakilacustomer.org', @clientStatus);

SELECT @clientStatus;
