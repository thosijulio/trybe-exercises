USE sakila;

DROP VIEW IF EXISTS address_info;

CREATE VIEW address_info AS
    SELECT 
        A.address_id, A.address, A.district, A.city_id, C.city
    FROM
        address AS A
            INNER JOIN
        city AS C ON A.city_id = C.city_id;

SELECT * FROM address_info;
