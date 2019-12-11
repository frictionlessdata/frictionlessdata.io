import csv
import json

from urllib import urlopen

import pygithub3

# Define the name of the organization to be scrapped
organization = 'frictionlessdata'

# Get the repo names of a given organization
gh = pygithub3.Github()
repo_names = gh.repos.list(user=organization).all()

def get_view_count(repository_slug, attribute):
	"""Get the statistical results on the analytical endpoint.
	view_count, the total number of views
	unique_count, the number of unique visitors
	"""
	url = 'https://api.github.com/repos/frictionlessdata/{}/traffic/views?access_token=fb649f854db663c8417cd27f406a4e5ff8ae90a4'
	link = url.format(slug)

	link = urlopen(link).read()
	result = json.loads(link)  
	return result[attribute]

def get_clones(slug):
	"""Get the statistical results on the analytical endpoint.
	the total number of clones
	"""
	url = 'https://api.github.com/repos/frictionlessdata/{}/traffic/clones?access_token=fb649f854db663c8417cd27f406a4e5ff8ae90a4'
	link = url.format(slug)

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
	types = "repo"
	stars = repo_name.stargazers_count
	watchers = repo_name.watchers_count
	open_issues = repo_name.open_issues_count
	view_count = get_view_count(slug, 'count')
	unique_count = get_view_count(slug, 'uniques')
	clones = get_clones(slug)

	new_data = {
				"Repo URL" : link,
				"Type" : types,
				"Slug" : slug,
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
