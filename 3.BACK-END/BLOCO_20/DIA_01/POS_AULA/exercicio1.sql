CREATE TABLE `sakila`.`Filme` (
  `FilmeId` INT NOT NULL DEFAULT AUTO_INCREMENT,
  `Descricao` VARCHAR(100) NOT NULL,
  `AnoLancamento` INT NOT NULL,
  `Nota` INT NULL,
  PRIMARY KEY (`FilmeId`),
  UNIQUE INDEX `FilmeId_UNIQUE` (`FilmeId` ASC) VISIBLE);

