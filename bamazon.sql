DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE items (
  item_id INT NOT NULL AUTO_INCREMENT,
  product VARCHAR(50) NULL,
  category VARCHAR(50) NULL,
  price (50),
  quantity INTEGER(50),
  PRIMARY KEY (item_id)
);

-- INSERT INTO items (product, category, price,quantity)
-- VALUES ("George Forman", "Cooking/Kitchen", 30, 25 ), ("Set of Golf Clubs", "Sports", 200, 10), ("Football", "Sports",20, 200), ("God of War", "Video Games", 60, 100), ("iPhone X", "Tech", 600, 50), ("Baseball", "Sports",5, 85), ("City Skylines", "Video Games", 60, 150);

INSERT INTO items (product, category, price,quantity)
VALUES ("Ralph Lauren Wallet", "Personal", 50, 20 ), ("Prada Purse", "Personal", 300, 125, ("Luggage", "Personal",35, 500);