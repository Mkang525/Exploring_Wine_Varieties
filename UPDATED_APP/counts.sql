DROP TABLE IF EXISTS winecounts;

--Create a table for wine reviews
CREATE TABLE winecounts (
ID INT NOT NULL PRIMARY KEY,
Title VARCHAR,
Country VARCHAR,
Points INTEGER,
Price INTEGER,
Province VARCHAR,
Variety VARCHAR,
Winery VARCHAR,
Count INTEGER,
Counts INTEGER
);
	
SELECT * FROM winecounts