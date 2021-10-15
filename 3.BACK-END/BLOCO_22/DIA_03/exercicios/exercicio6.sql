USE sakila;

CREATE INDEX exercicio6 ON address(postal_code);

-- Execution Plan com index
SELECT 
    *
FROM
    address
WHERE
    postal_code = '36693';

DROP INDEX exercicio6 ON address;

-- Execution Plan sem index
SELECT 
    *
FROM
    address
WHERE
    postal_code = '36693';
