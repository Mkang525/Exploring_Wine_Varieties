DROP TABLE IF EXISTS winecounts;
DROP TABLE IF EXISTS topten;

--Create a table for wine reviews
CREATE TABLE winecounts (
ID SERIAL PRIMARY KEY,
Title VARCHAR,
Country VARCHAR,
Points INTEGER,
Price FLOAT,
Province VARCHAR,
Variety VARCHAR,
Winery VARCHAR,
Count INTEGER,
Counts INTEGER
);
	
SELECT * FROM winecounts;

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
