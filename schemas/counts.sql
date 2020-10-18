DROP TABLE IF EXISTS winecounts;

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