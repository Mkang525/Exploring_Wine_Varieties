# create a route to the index.html and sql database

# dependencies
import sqlite3 as sql
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine, func, and_

from flask import Flask, render_template, request


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
    return render_template('index.html')

# create the connection
if __name__== '__main__':
    app.run(debug = True)


