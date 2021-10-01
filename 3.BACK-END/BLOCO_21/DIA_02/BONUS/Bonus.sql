USE Pixar;

-- Exercício 1
SELECT 
    M.*
FROM
    Pixar.Movies AS M
        INNER JOIN
    Pixar.BoxOffice AS BO ON BO.movie_id = M.id AND BO.rating > 8
WHERE
    M.theater_id IS NOT NULL;

-- Exercício 2
SELECT 
    M1.title,
    M1.length_minutes,
    M2.title,
    M2.length_minutes,
    M1.director
FROM
    Pixar.Movies AS M1,
    Pixar.Movies AS M2
WHERE
    M1.director = M2.director
        AND M1.title <> M2.title;
        
-- Exercício 3 - PT1
SELECT 
    M.title
FROM
    Pixar.Movies AS M
WHERE
    M.id IN (SELECT 
            BO.movie_id
        FROM
            Pixar.BoxOffice AS BO
        WHERE
            BO.domestic_sales + BO.international_sales >= 500000000)
        AND M.length_minutes > 110;
        
-- Exercício 3 - PT2
SELECT 
    M.title
FROM
    Pixar.Movies AS M
        INNER JOIN
    Pixar.BoxOffice AS BO ON BO.movie_id = M.id
WHERE
    BO.domestic_sales + BO.international_sales >= 500000000
        AND M.length_minutes > 110;
