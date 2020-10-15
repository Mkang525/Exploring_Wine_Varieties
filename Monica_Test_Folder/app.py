# create a route to the index.html and sql database

# dependencies
import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
import datetime as dt
from flask import Flask, render_template, redirect

engine = create_engine("sqlite:///wine_db.sqlite")

Base = automap_base()

Base.prepare(engine, reflect=True)

Wine = Base.classes.wine


# create instance of Flask
app = Flask(__name__)

# create a route for the homepage
@app.route('/')
def index():
    """All available API routes."""
    return render_template('home.html')

# bubble chart/bar chart
@app.route('/api/v1.0/varieties')
def varieties():
    """Varieties Route."""
    return render_template('index.html')

# json 
@app.route("/api/v1.0/wine")
def getWinesForChart():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # results is a list of tuples
    results = session.query(Wine).all()
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
        # winery['count'] = row.count
        # winery['counts'] = row.counts
        wines.append(winery)

    return jsonify(wines)

@app.route("/api/v1.0/map")
def getWinesForMap():

    session = Session(engine)

    results = session.query(Wine).all()
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
        wines.append(winery)

    return jsonify(wines)


# create the connection
if __name__== '__main__':
    app.run(debug = True)