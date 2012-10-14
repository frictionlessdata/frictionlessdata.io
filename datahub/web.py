from flask import Flask, render_template, request
import json
import os

from catalog import catalog

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

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
        'us-cpi'
    ]
}
catalog.load(DATASETS)


if __name__ == "__main__":
    app.run(debug=True, port=os.environ.get('PORT', 5000))

