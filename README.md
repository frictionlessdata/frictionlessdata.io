This repo performs a few different purposes:

* An [issue tracker](https://github.com/okfn/data.okfn.org/issues) for
  Frictionless Data (<http://data.okfn.org/>) activities
* Source repo for documentation for Frictionless Data project (docs themselves
  deployed at <http://data.okfn.org/doc/>)
* The simple NodeJS app that runs the <http://data.okfn.org> website

----

## Installing the App

### 1. Install dependencies

Requires NodeJS (>= v0.8).

Install the requirements (in package.json):

    npm install .

### Configure

*This is optional - the app will work out of the box with the default
configuration (see lib/config.js).*

You can configure the app by setting environment variables:

* `CATALOG_LIST`: a URL to a Data Package Catalog List - a txt
  file with each line being a URL to a Data Package. See e.g.
  http://raw.github.com/datasets/registry/master/catalog-list.txt
* `CORE_CATALOG_LIST` same as previous but points to list of [Core Data
  Packages][core] e.g.
  http://raw.github.com/datasets/registry/master/datapackage-list.txt

[core]: http://data.okfn.org/roadmap/core-datasets

### Run the web application

Run the web app locally:

    node app.js

If you want to do a deployment to Heroku see the next section.

## Deployment to Heroku

Note that you will need to install the [Heroku toolbelt](https://toolbelt.heroku.com/) to carry out the `heroku` commands below.

### Create the application on Heroku

*Skip this step if the application is already deployed*

This is heavily based on [this
tutorial](https://devcenter.heroku.com/articles/python#deploy-to-heroku).

    # replace {app-name} with the name of your app
    heroku create {app-name}
    git push heroku master
    # now point at our config
    heroku ps:scale web=1

## To deploy (already created):

Push to heroku git repo:

    git push heroku master

*Note*: if didn't do the create you will need to add the heroku remote:

    git remote add heroku git@heroku.com:{app-name}.git

### Adding collaborators:

    heroku sharing:add joe@example.com

### Setting the domain name

Do the following:

    heroku domains:add {your-domain-name}

Now CNAME your domain to {myapp}.herokuapp.com

