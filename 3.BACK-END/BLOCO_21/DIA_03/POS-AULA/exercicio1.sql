USE BeeMovies;

DROP TRIGGER IF EXISTS exercicio1Trigger1;
DROP TRIGGER IF EXISTS exercicio1Trigger2;

DELIMITER $$

CREATE TRIGGER exercicio1Trigger1
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
SET NEW.release_year = NOW();
END $$

CREATE TRIGGER exercicio1Trigger2
AFTER INSERT ON movies
FOR EACH ROW
BEGIN
INSERT INTO movies_logs(movie_id, executed_action, log_date) VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;
