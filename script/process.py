import os
import csv
import json

from urllib.request import urlopen

import pygithub3
from dotenv import load_dotenv

# Setup 
load_dotenv()
username = os.environ.get('ORGANIZATION')
github_token = os.environ.get('GITHUB_TOKEN')

# Get the repo names of a given organization

gh = pygithub3.Github()

gh_user = gh.get_user(username)

repo_names = gh_user.get_repos()

def get_view_count(repository_slug, attribute):
	"""Get the statistical results on the analytical endpoint.
	view_count, the total number of views
	unique_count, the number of unique visitors
	"""
	link = f'https://api.github.com/repos/frictionlessdata/{repository_slug}/traffic/views?access_token={github_token}'

	link = urlopen(link).read()
	result = json.loads(link)  
	return result[attribute]

def get_clones(slug):
	"""Get the statistical results on the analytical endpoint.
	the total number of clones
	"""
	link = f'https://api.github.com/repos/frictionlessdata/{slug}/traffic/clones?access_token={github_token}'
	
	link = urlopen(link).read()
	result = json.loads(link)
	return result['count'] 

def title_clean(title):
	"""Beautify the title :)"""
	title = title.replace('-',' ')
	title = title.capitalize()
	return title

list_of_new_data = []

for repo_name in repo_names:
	slug = repo_name.name
	title = title_clean(slug)
	link = repo_name.html_url 
	description = repo_name.description
	url = repo_name.homepage
	types = "Repo"
	stars = repo_name.stargazers_count
	watchers = repo_name.watchers_count
	open_issues = repo_name.open_issues_count
	view_count = get_view_count(slug, 'count')
	unique_count = get_view_count(slug, 'uniques')
	clones = get_clones(slug)

	new_data = {
		"Repo link" : link,
		"Type" : types,
		"Slug" : slug,
		"Repo URL" : url,
		"Title" : title,
		"Description" : description,
		"Stars" : stars,
		"Watchers" : watchers,
		"Clones" : clones,
		"Open issues": open_issues,
		"Views" : view_count,
		"Uniques": unique_count}

	list_of_new_data.append(new_data)

# Create a CSV file 
with open('frictionless-data-repos.csv', 'w') as csvfile:
	writer = csv.DictWriter(csvfile, fieldnames=new_data)
	writer.writeheader()
	writer.writerows(list_of_new_data)
