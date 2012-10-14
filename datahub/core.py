import os
import logging
from flask import Flask
from datahub import default_settings

app = Flask(__name__)

def configure_app(app):
    '''Configure the app from available sources'''
    here = os.path.dirname(os.path.abspath(__file__))
    app.config.from_object(default_settings)
    app.config.from_envvar('DATAHUB_SETTINGS', silent=True)
    config_path = os.path.join(os.path.dirname(here), 'settings_local.py')
    if os.path.exists(config_path):
        app.config.from_pyfile(config_path)

configure_app(app)

