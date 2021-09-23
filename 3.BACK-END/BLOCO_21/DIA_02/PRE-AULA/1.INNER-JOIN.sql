USE sakila;

SELECT a.actor_id, a.first_name, f.film_id FROM sakila.actor AS a
JOIN film_actor AS f ON f.actor_id = a.actor_id;
