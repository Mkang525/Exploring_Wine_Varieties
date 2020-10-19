# Project_2_Visualization
Exploring Wine Varieties
Braden, Kang, Limoli, Sodhi

----------------------------------------------------------------------Summary:-----------------------------------------------------------------------
Using a dataset[1] of reviews collected from the Wine Enthusiast[2] website, this website provides users the opportunity to explore more about the world of wine.

The app.py file contains a flask app that connects to a server displaying pages of different aspects of the wine data to explore. 
To explore some of the details of a particular wine variety, the "information" page accesses a function that uses the Simple Statistics javascript library to build a table summarizing its price, quality, and more.
A function for a map of the top 10 wines of a particularly variety will appear on the "countries" page.
Another function pulls the data in JSON format into display a bubble chart to visualize the pricing and a bar chart to demonstrate the origins of a particularl variety of wine. 

All of these pages rely on a dropdown menu to select and filter the visualizations by the 50 most popular varieties in the dataset. 

---------------------------------------------------------------------Instructions:-------------------------------------------------------------------
1) To create the database: 
    - Create a database in postgres named wine_db_counts
    - Create the tables using the schema file in the schema folder. There should be two tables named "winecounts" and "topten", which correspond to     wine_data_updated_counts.csv and topten_50.csv respectively--in the CSVS folder. Import these into the tables in postgres.
    - Run the query.sql to drop null values. 
    
2) To run the flask app:
    - In the config.py folder, enter the postgres username, password, and port number. 

3) To access the map:
   - In the config.js file (static/js/config.js), put the mapbox API_KEY. 

These steps should deploy a website that looks like images in the completed_images folder. 

[1] https://www.kaggle.com/zynicide/wine-reviews
[2] https://www.winemag.com/
