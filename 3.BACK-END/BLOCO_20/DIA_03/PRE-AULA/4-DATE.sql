USE sakila;

-- Exercício 1
SELECT * FROM payment WHERE DATE(payment_date) = '2005-05-25';

-- Exercício 2
SELECT * FROM payment WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

-- Exercício 3
SELECT DATE(rental_date), YEAR(rental_date), MONTH(rental_date), DAY(rental_date), HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date)
FROM rental WHERE rental_id = 10330;

-- Exercício 4