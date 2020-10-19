# create a route to the index.html and sql database

# dependencies
# import os
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func
# from flask import Flask, jsonify
# from flask import Flask, render_template, redirect
# from flask_sqlalchemy import SQLAlchemy


import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
import datetime as dt
from flask import Flask, render_template, redirect
from config import db_password, db_username

from sqlalchemy import inspect



#################################################
# Database Setup
#################################################
# db_uri = f'postgresql://{db_username}:{db_password}@localhost:5432/topten_db'
db_uri = f'postgresql://{db_username}:{db_password}@localhost:{postgres_port}/wine_db_counts'
# try:
#     from .config import db_username
#     from .config import db_password
#     db_uri = f'postgresql://{db_username}:{db_password}@localhost:5432/topten_db'
# except ImportError:
#     print("config not found!")
#     db_uri = "sqlite:///topten_db.sqlite"

# final_db_uri = os.environ.get('DATABASE_URL', '') or db_uri
# print(final_db_uri)

engine = create_engine(db_uri)
print(engine)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

inspector = inspect(engine)
for table_name in inspector.get_table_names():
    print(table_name)

# Save references to each table
Topten = Base.classes.topten
Winecounts= Base.classes.winecounts





#################################################
# Flask Setup
#################################################
app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

#################################################
# Flask Routes
#################################################

# create a route for the homepage, for when it opens in python
@app.route('/')
def index():
    """All available API routes."""
    return render_template('home.html')

# for the main navigation link
@app.route('/home.html')
def main_nav():
    """All available API routes."""
    return render_template('home.html')

# bubble chart/bar chart
@app.route('/index.html')
def varieties():
    """Varieties Route."""
    return render_template('index.html')

# map 
@app.route('/map.html')
def map():
    return render_template("map.html")

# table 
@app.route('/table.html')
def table():
    return render_template("table.html")


# json 
@app.route("/api/v1.0/wine")
def getWinesForChart():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # results is a list of tuples
    results = session.query(Winecounts).all()
    session.close()
    wines = []
    for row in results:
        winery = {}
        winery['id'] = row.id
        winery['title'] = row.title
        winery['country'] = row.country
        winery['points'] = row.points
        winery['price'] = row.price
        winery['province'] = row.province
        winery['variety'] = row.variety
        winery['winery'] = row.winery
        winery['count'] = row.count
        winery['counts'] = row.counts
        wines.append(winery)

    return jsonify(wines)    


@app.route("/api/v1.0/map")
def getWinesForMap():

    session = Session(engine)

    results = session.query(Topten).all()
    session.close()
    wines=[]
    for row in results:
        winery = {}
        winery['id'] = row.id
        winery['title'] = row.title
        winery['country'] = row.country
        winery['points'] = row.points
        winery['price'] = row.price
        winery['province'] = row.province
        winery['variety'] = row.variety
        winery['winery'] = row.winery
        winery['lat'] = row.lat
        winery['lng'] = row.lng
        wines.append(winery)

    return jsonify(wines)




# create the connection
if __name__== '__main__':
    app.run(debug = True)
