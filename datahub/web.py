from flask import Flask, render_template, request
import json
import os

from core import app
from catalog import catalog

@app.route("/")
def home():
    datasets = catalog.query()
    total = len(datasets)
    return render_template('home.html', datasets=datasets, total=total)

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/search")
def search():
    q = request.args.get('q', '')
    datasets = catalog.query(q)
    total = len(datasets)
    return render_template('search.html', q=q, datasets=datasets, total=total)

@app.route('/<owner>/<id>')
def dataset(owner, id):
    dataset = catalog.get(id)
    dataset.download_url = dataset.files[0].url
    raw_data_file = dataset.files[0].dictize()
    raw_data_file['dataset_name'] = dataset.id
    return render_template('dataset.html', dataset=dataset,
            raw_data_file=raw_data_file)


DATASETS = {
    'reference': [
    ],
    'indicator': [
        'gdp',
        'us-cpi',
        'population'
    ]
}
catalog.load(DATASETS)


if __name__ == "__main__":
    app.run(debug=app.config['DEBUG'], host=app.config['HOST'],
            port=app.config['PORT'])

