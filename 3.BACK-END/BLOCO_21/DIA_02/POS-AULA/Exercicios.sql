USE Pixar;

-- Exercício 1
SELECT 
    M.title, BO.domestic_sales, BO.international_sales
FROM
    Pixar.Movies AS M
        INNER JOIN
    Pixar.BoxOffice AS BO ON BO.movie_id = M.id;
    
-- Exercício 2
SELECT 
    M.title, BO.international_sales, BO.domestic_sales
FROM
    Pixar.Movies AS M
        INNER JOIN
    Pixar.BoxOffice AS BO ON BO.movie_id = M.id
WHERE
    BO.international_sales > BO.domestic_sales;
    
-- Exercício 3
SELECT 
    M.title, BO.rating
FROM
    Pixar.Movies AS M
        INNER JOIN
    Pixar.BoxOffice AS BO ON BO.movie_id = M.id
ORDER BY rating DESC;

-- Exercício 4
SELECT 
    T.*, M.title, M.director, M.year, M.length_minutes
FROM
    Pixar.Theater AS T
        LEFT JOIN
    Pixar.Movies AS M ON M.theater_id = T.id ORDER BY `name`;
    
-- Exercício 5
SELECT 
    T.name, T.location, M.*
FROM
    Pixar.Theater AS T
        RIGHT JOIN
    Pixar.Movies AS M ON T.id = M.theater_id
ORDER BY `name`;