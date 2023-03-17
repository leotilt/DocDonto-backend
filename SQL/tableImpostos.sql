CREATE TABLE impostos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO impostos (nome, valor) VALUES
('Imposto sobre produtos industrializados', 10.00),
('Imposto sobre operações financeiras', 5.00),
('Imposto sobre circulação de mercadorias e serviços', 15.00),
('Imposto de renda', 20.00),
('Imposto territorial rural', 7.50);