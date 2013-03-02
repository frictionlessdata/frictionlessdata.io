Ultra-lightweight DataHub running off datasets stored in GitHub.

See it in action at <http://datasets.okfnlabs.org/>

## Implementation Notes

* Very simple. Just one or two simple web pages
* DataStore and API
  
  - May be optional for MVP?
  - SQL-backed (Use "SqlStore" stuff from CKAN?)
  - JSON RESTful API
  - Refine reconciliation support
  - Build on CKAN DataStore ...

* Web interface

  - Big list on the front page
  - per-datasets page /{dataset-name}-{id}/... 
  - Scrollable table of the data with search (?)
  - Links to download of CSV and full API instructions
  - (?) URL for each element /{dataset}/id/{element-id}/
  - Add .json, .{...} for each item

How to implement?

* Pure JS (or Node or Flask?)
* Why Not Use CKAN?

  * We may use CKAN at some point BUT to start with ...
  * Want very simple structure (2 pages!)
  * JS only (keep it really simple)
  * Don't need CKAN's full power
  * CKAN somewhat more complex to deploy


## Installing

Requires NodeJS (>= v0.8).

Install the requirements (in package.json):

    npm install .

Run the web application locally:

    node app.js


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

