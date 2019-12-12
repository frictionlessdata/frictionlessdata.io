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

3. Run the process.py script by using the following command

`python process.py`

4. Voilà! You will find a CSV file called `frictionless-data-repos` in the same directory

## License

This Data Package is made available under the Public Domain Dedication and License v1.0
