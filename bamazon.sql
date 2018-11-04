DROP DATABASE IF EXISTS bAmazon_db;
CREATE DATABASE bAmazon_db;

USE bAmazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('jeans', 'pants', 20.50, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('t-shirts', 'shirts', 9.75, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('chinos', 'pants', 18.50, 625);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('nike air-max','shoes', 50.25, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('shorts','pants', 12.75, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('v-neck', 'shirts', 9.25, 750);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('adidas yeezy', 'shoes', 45.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('hoody', 'shirts', 30.50, 420);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('nike free-run', 'shoes', 55.25, 220);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('henley', 'shirts', 12.50, 300);