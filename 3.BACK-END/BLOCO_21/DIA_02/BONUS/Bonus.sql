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
