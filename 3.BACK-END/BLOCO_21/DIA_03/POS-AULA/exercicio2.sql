USE BeeMovies;

DROP TRIGGER IF EXISTS exercicio2;

DELIMITER $$

CREATE TRIGGER exercicio2
BEFORE UPDATE ON movies
FOR EACH ROW
BEGIN
SET NEW.ticket_price_estimation = IF(OLD.ticket_price > NEW.ticket_price, 'Decreasing', 'Increasing');
INSERT INTO movies_logs(movie_id, executed_action, log_date) VALUES (NEW.movie_id, 'UPDATE', NOW());
END $$

DELIMITER ;
