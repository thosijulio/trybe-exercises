USE sakila;

DROP VIEW IF EXISTS movies_languages;

CREATE VIEW movies_languages AS
    SELECT 
        F.title, F.language_id, L.`name`
    FROM
        film AS F
            INNER JOIN
        `language` AS L ON F.language_id = L.language_id;

SELECT * FROM movies_languages;
