DROP TABLE IF EXISTS wine;

CREATE TABLE wine (
type VARCHAR(30) NOT NULL PRIMARY KEY,
color VARCHAR(30) NOT NULL,
description VARCHAR NOT NULL
);

select * from wine;
