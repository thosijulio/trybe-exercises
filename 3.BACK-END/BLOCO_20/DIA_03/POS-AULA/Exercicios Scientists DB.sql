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

-- Exercício 7

-- Exercício 8
