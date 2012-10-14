from setuptools import setup, find_packages
import sys, os

setup(
    name='datahub',
    version='0.1',
    description='Ultra lightweight DataHub',
    long_description='',
    classifiers=[], # Get strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
    keywords='',
    author='Open Knowledge Foundation',
    author_email='',
    license='mit',
    packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
    include_package_data=True,
    zip_safe=False
)
