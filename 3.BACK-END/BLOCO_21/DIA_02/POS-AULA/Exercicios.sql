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