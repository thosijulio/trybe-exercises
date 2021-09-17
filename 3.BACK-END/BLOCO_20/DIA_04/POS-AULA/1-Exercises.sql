USE Pixar;
SET SQL_SAFE_UPDATES = 0;

-- Exercício 1
INSERT INTO Movies(title, director, `year`, length_minutes)
VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'Jon Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);
    
-- Exercício 2
SELECT id FROM Movies WHERE title = 'Procurando Nemo';
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUE (17, 6.8, 450000000, 370000000);


-- Exercício 3
UPDATE Movies SET director = 'Andrew Staton' WHERE title = 'Procurando Nemo';

-- Exercício 4
UPDATE Movies SET title = 'Ratatouille', `year` = 2010 WHERE title = 'RATATUI';

-- Exercício 5

-- Exercício 6

-- Exercício 7