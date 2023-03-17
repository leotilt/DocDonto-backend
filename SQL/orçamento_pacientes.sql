CREATE TABLE orcamento_pacientes (
   id INT NOT NULL AUTO_INCREMENT,
   valorCobrado VARCHAR(255) NOT NULL,
   valorDesconto VARCHAR(255) NOT NULL,
   status VARCHAR(255) NOT NULL,
   createdAt DATETIME,
   updatedAt DATETIME,
   PRIMARY KEY (id)
);