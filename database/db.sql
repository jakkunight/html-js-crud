CREATE DATABASE crud_js;
USE crud_js;

-- Tablas:
CREATE TABLE products(
	id INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name TEXT NOT NULL,
	description TEXT NOT NULL,
	price DECIMAL(7, 2) NOT NULL
);

