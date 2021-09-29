USE sakila;

-- Exercício 1
SELECT a.actor_id, a.first_name, f.film_id FROM sakila.actor AS a
INNER JOIN film_actor AS f ON f.actor_id = a.actor_id;

-- Exercício 2
SELECT c.first_name, c.last_name, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON a.address_id = c.address_id;

-- Exercício 3
SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    a.address_id,
    a.address
FROM
    sakila.customer AS c
        INNER JOIN
    sakila.address AS a ON a.address_id = c.address_id
ORDER BY c.first_name
LIMIT 100;

-- Exercício 4
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;
SELECT 
    C.first_name, C.email, C.address_id, A.address, A.district
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
WHERE
    C.first_name LIKE '%rene%';

-- Exercício 5
SELECT 
    c.first_name, COUNT(a.address) AS `quantidade de endereço`
FROM
    sakila.customer c
        INNER JOIN
    sakila.address AS a ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY c.first_name
ORDER BY first_name DESC;

-- Exercício 6
SELECT 
    s.first_name, s.last_name, AVG(p.amount)
FROM
    sakila.staff AS s
        INNER JOIN
    sakila.payment AS p ON p.staff_id = s.staff_id
GROUP BY s.first_name , s.last_name;

-- Exercício 7

