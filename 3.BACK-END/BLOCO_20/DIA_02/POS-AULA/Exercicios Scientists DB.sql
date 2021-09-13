USE Scientists;

-- Exercício 1
SELECT 'This is SQL Exercise, Practice and Solution';

-- Exercício 2
SELECT 1, 2, 3;

-- Exercício 3
SELECT 10 + 15;

-- Exercício 4
SELECT 10 * 15 + 2;

-- Exercício 5
SELECT * FROM Scientists.Scientists;

-- Exercício 6
SELECT name AS 'Nome do Projeto', ssn AS 'Tempo de Trabalho' FROM Scientists.Scientists;

-- Exercício 7
SELECT name FROM Scientists.Scientists ORDER BY name ASC;

-- Exercício 8
SELECT name FROM Scientists.Projects ORDER BY name DESC;

-- Exercício 9
SELECT CONCAT('O projeto "', name, '" precisou de ', Hours, ' horas para ser concluído.') as Message FROM Scientists.Projects;

-- Exercício 10
SELECT name, hours FROM Scientists.Projects ORDER BY hours DESC LIMIT 3;

-- Exercício 11
SELECT DISTINCT Project FROM Scientists.AssignedTo;

-- Exercício 12
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;

-- Exercício 13
SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;

-- Exercício 14
SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;

-- Exercício 15
SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists') AS message FROM Scientists;