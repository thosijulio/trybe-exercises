USE Pixar;

-- Exercício 1
UPDATE BoxOffice SET rating = 9.0 WHERE domestic_sales > 400000000;

-- Exercício 2
UPDATE BoxOffice SET rating = 6.0 WHERE domestic_sales > 200000000 AND international_sales < 300000000;

-- Exercício 3
SELECT id FROM Movies WHERE length_minutes < 100;
DELETE FROM BoxOffice WHERE movie_id = 16;
DELETE FROM Movies WHERE length_minutes < 100;