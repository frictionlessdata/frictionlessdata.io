# Put it Online

This tutorial is about how to publish your Data Package online for others to
find and use.

It assumes you have already finished packaging up your data as a Data Package
(if not, [check out the instructions here][publish]).

[publish]: /doc/publish/

## It's Just Files Online

Publishing your Data Package is incredibly simple: you just need to post it
online somewhere that others can access.

> Note: if you just want to to share your Data Package with a few others you
> can just send it directly, for example via email.

Since a Data Package is just some files there are as many ways to do
this as there are ways to put files online.

Here we will just provide some general tips and illustrate some of the most
popular publishing options.

## Key Tips

However you publish your Data Package there are a few key points to keep in
mind:

* All the files in the Data Package should be accessible online
* The structure of your Data Package should be preserved. Specifically the
  paths between your `datapackage.json` and the data files must be preserved.
  For example, if your Data Package directory looked like this on disk:
  
      datapackage.json
      data.csv
      somedir/other-data.csv

  then online it should look like:

      http://your.website.com/mydatapackage/datapackage.json
      http://your.website.com/mydatapackage/data.csv
      http://your.website.com/mydatapackage/somedir/other-data.csv
  
  This can be a problem with services like e.g. Google Drive where files in a
  given folder don't have a web address that relates to that folder. The reason
  we need to preserve relative paths is that when using the Data Package client
  software will compute the full path from the location of the `datapackage.json`
  itself plus the relative path for the file give in the `datapackage.json`
  resources section.

## Github, Bitbucket etc

One nice option for the more sophisticated is to manage your Data Package in a
git or mercurial repo and push it to github, gitorious, bitbucket or similar.

## S3, Google Storage etc

Cloud storage like S3 and Google Storage are perfect for storing your Data
Packages.

## Dropbox, Google Drive etc

Dropbox and similar providers are a little more problematic because they do not
replicate your local file structure at online URLs.

