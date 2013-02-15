Ultra-lightweight DataHub running off datasets stored in GitHub.

See it in action at <http://datasets.okfnlabs.org/>


## Installing

1. Install Python and pip

2. Install the requirements into a virtualenv:

      pip install -r requirements.txt

3. Run the web application:

      python datahub/web.py


## Deployment to Heroku

Note that you will need to install the [Heroku toolbelt](https://toolbelt.heroku.com/) to carry out the `heroku` commands below.

### Create a Profile

Open Procfile and add:
  
    web: python datahub/web.py

### Create the application on Heroku

*Skip this step if the application is already deployed*

This is heavily based on [this
tutorial](https://devcenter.heroku.com/articles/python#deploy-to-heroku).

    # replace {app-name} with the name of your app
    heroku create {app-name}
    git push heroku master
    # now point at our config
    heroku config:set DATAHUB_SETTINGS=/app/heroku_settings.py
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

