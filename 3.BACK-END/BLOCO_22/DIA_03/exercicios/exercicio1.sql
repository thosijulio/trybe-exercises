USE sakila;

DROP VIEW IF EXISTS film_with_categories;

CREATE VIEW film_with_categories AS
SELECT 
    F.`title`, C.category_id, C.`name`
FROM
    film AS F
        INNER JOIN
    film_category AS FC ON F.film_id = FC.film_id
        INNER JOIN
    category AS C ON FC.category_id = C.category_id
ORDER BY title;

SELECT * FROM film_with_categories;
