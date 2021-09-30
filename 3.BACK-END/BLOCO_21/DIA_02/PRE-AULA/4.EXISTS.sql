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
SELECT 
    Id, title
FROM
    hotel.Books AS B
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent AS BL
        WHERE
            B.Id = BL.book_id)
        AND title LIKE '%lost%';
        
-- Exercício 3
SELECT 
    `Name`
FROM
    hotel.Customers AS C
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            CarSales AS CS
        WHERE
            CS.CustomerId = C.CustomerId);
            
-- Exercício 4
SELECT 
    Cus.Name, Car.Name
FROM
    hotel.Customers AS Cus
        INNER JOIN
    hotel.Cars AS Car
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales AS CS
        WHERE
            CS.CustomerID = Cus.CustomerId
                AND CS.CarId = Car.Id);
