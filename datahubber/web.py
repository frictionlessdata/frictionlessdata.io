from flask import Flask, render_template, request
app = Flask(__name__)

from catalog import catalog

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/search")
def search():
    catalog.load(DATASETS)
    q = request.args.get('q', '')
    datasets = catalog.query(q)
    total = len(datasets)
    return render_template('search.html', q=q, datasets=datasets, total=total)


DATASETS = {
    'reference': [
    ],
    'indicator': [
        'gdp',
        'us-cpi'
    ]
}

if __name__ == "__main__":
    app.run(debug=True)

