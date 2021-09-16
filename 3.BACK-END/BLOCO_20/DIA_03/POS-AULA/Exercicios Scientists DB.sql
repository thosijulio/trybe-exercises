USE Scientists;

-- Exercício 1
SELECT * FROM Scientists WHERE name LIKE '%E%';

-- Exercício 2
SELECT * FROM Projects WHERE code LIKE 'A%' ORDER BY name;

-- Exercício 3
SELECT code, name FROM Projects WHERE code LIKE '%3%' ORDER BY name;

-- Exercício 4
SELECT scientist FROM AssignedTo WHERE project IN('AeH3', 'Ast3', 'Che1');

-- Exercício 5
SELECT * FROM Projects WHERE hours > 500;

-- Exercício 6
SELECT * FROM Projects WHERE hours BETWEEN 250 AND 800;

-- Exercício 7
SELECT name, code FROM Projects WHERE code NOT LIKE 'A%';

-- Exercício 8
SELECT name FROM Projects WHERE code LIKE '%H%';
