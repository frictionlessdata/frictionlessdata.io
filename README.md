# Frictionless Data

Frictionless Data is about removing the friction in working with data. We are doing this by developing a set of software, specifications, and best practices for publishing data. 

This issue tracker is no longer in use. Please create project-related issues in the [Frictionless Data specs issue tracker](https://github.com/frictionlessdata/specs/issues) or the [Frictionless Data website issue tracker](https://github.com/frictionlessdata/website/issues), as appropriate. 

* Frictionless Data: http://frictionlessdata.io/ 
* Specifications: http://frictionlessdata.io/specs
* User Stories: http://frictionlessdata.io/user-stories/
* Forum: https://discuss.okfn.org/c/frictionless-data
* Gitter chat: https://gitter.im/frictionlessdata/chat

# Script instructions

This dataset contains all repositories of "frictionlessdata" organisation on Github, including their:

* title
* slug
* description
* url 
* link
* type
* views number
* clones number
* unique views number
* stars number
* watchers number
* open issues number 

## Data

The data were obtained from [Github](https://github.com/)

## Preparation

In the "script" directory, there is a file called `process.py` which will generate a csv file, containing all of the data listed above.

## Instructions:

1. Download "requirements.txt" and "process.py" from the `script` directory
2. Go to your terminal, navigate to the folder where you saved the files and use the following command to run the dependencies 

`pip install -r requirements.txt`

! If you receive an error, check the Troubleshooting section below.

3. Run `cp .env.example .env` and fill out the options for: 

`ORGANIZATION`: here goes the name of the user or the organization whose repositories you want to scrape

`GITHUB_TOKEN`: here goes your personal private token. You can get yours from the [Github settings](https://github.com/settings/tokens).

4. Run the process.py script by using the following command

`python process.py`

5. Voilà! You will find a CSV file called `frictionless-data-repos` in the same directory

## Troubleshooting requirements install

The packages PyGithub and PyGithub3 can trigger a conflict during the installation. 

If you receive the error message `from github import Github ModuleNotFoundError: No module named 'github'` during the `pip install -r requirements.txt` phase, please run: 

`$ pip install PyGithub` and then again:

`$ pip install -r requirements.txt`

## License

This Data Package is made available under the Public Domain Dedication and License v1.0

