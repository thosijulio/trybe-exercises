CREATE DATABASE IF NOT EXISTS ZooDB;

USE ZooDB;

CREATE TABLE Animal (
	id INT PRIMARY KEY AUTO_INCREMENT,
	Nome VARCHAR(50) NOT NULL,
    Especie VARCHAR(50) NOT NULL,
    Sexo VARCHAR(1) NOT NULL,
    Idade INT NOT NULL,
    Localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE Gerente (
	id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Sexo VARCHAR(1) NOT NULL,
    Idade INT NOT NULL,
    Endereco VARCHAR(50) NOT NULL
);

CREATE TABLE Cuidador (
	id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Sexo VARCHAR(1) NOT NULL,
    Idade INT NOT NULL,
    Endereco VARCHAR(50) NOT NULL,
    id_Gerente INT NOT NULL,
    FOREIGN KEY (id_Gerente) REFERENCES Gerente (id)
);

CREATE TABLE Animal_Cuidador (
	id_Animal INT NOT NULL,
    id_Cuidador INT NOT NULL,
    Data_Inicio DATE NOT NULL,
    Data_Termino DATE,
	PRIMARY KEY (id_Animal, id_Cuidador),
    FOREIGN KEY (id_Animal) REFERENCES Animal (id),
    FOREIGN KEY (id_Cuidador) REFERENCES Cuidador (id)
);
