DROP TABLE IF EXISTS topten;

--Create a table for wine reviews
CREATE TABLE topten (
ID INT NOT NULL PRIMARY KEY,
Title VARCHAR,
Country VARCHAR,
Points INTEGER,
Price VARCHAR,
Province VARCHAR,
Variety VARCHAR,
Winery VARCHAR,
Lat FLOAT,
Lng FLOAT
);

SELECT * FROM topten

