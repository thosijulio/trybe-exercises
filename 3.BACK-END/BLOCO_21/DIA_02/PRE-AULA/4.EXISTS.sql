USE hotel;

-- Exercício 1
SELECT 
    Id, title
FROM
    hotel.Books AS B
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent AS BL
        WHERE
            B.Id = BL.book_id);
            
-- EXERCÍCIO 2
