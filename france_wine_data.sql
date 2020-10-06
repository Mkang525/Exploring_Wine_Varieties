CREATE VIEW france_wine_data AS
select id, country, variety, points, price, province, region01 
from wine
where country = 'France';

SELECT * FROM france_wine_data;

