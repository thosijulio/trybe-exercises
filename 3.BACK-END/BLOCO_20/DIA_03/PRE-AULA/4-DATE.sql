USE sakila;

SELECT * FROM payment WHERE DATE(payment_date) = '2005-05-25';

SELECT * FROM payment WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

SELECT * FROM rental;