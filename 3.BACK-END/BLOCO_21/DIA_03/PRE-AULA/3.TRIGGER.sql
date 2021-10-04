
-- Exercício 1

USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER registroInsercao
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

-- Exercício 2

USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER registroAtualizacao
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;

-- Exercício 3
