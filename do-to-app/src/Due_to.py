from flask import Flask, render_template, request
from flask import redirect, session, url_for, flash, abort,
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy import create_engine, exc
from Due_to_DBSetup.py import Base, User, Group, Task
import random, string
import httplib2
from flask import make_response
import requests
import bleach











app = Flask(__name__)

engine = create_engine('sqlite:///due_to.db')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()
connect_args = {'check_same_thread': False}













if __name__ == '__main__':
    app.secret_key = 'super_secret_key'
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
