
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

USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER registroRemocao
AFTER DELETE ON carros
FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;
