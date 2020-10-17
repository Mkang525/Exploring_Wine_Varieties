# Project_2_Visualization
Exploring Wine Varieties
Braden, Kang, Limoli, Sodhi

Using a dataset[1] of reviews collected from the Wine Enthusiast[2] website, this website provides users the opportunity to explore more about the world of wine.

The app.py file contains a flask app that connects to a server displaying pages of different aspects of the wine data to explore. 
After inputing a mapbox API key into the config.js file (static->js), a function for a map of the top 10 wines of a particularly variety will appear on the "countries" page.
Another function pulls the data in JSON format into display a bubble chart to visualize the pricing and a bar chart to demonstrate the origins of a particularl variety of wine. 
To explore some of the details of a particular wine variety, the "information" page accesses a function that uses the Simple Statistics javascript library to build a table summarizing its price, quality, and more.

All of these pages rely on a dropdown menu to select and filter the visualizations by the 50 most popular varieties in the dataset. 

[1] https://www.kaggle.com/zynicide/wine-reviews
[2] https://www.winemag.com/
