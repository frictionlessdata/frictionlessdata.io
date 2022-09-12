---
title: Publish Your Data Package Online
date: 2016-08-29
tags:
category: publishing-data
---

This tutorial is about how to publish your Data Package online for others to find and use.

It assumes you have already finished packaging up your data as a Data Package (if not, [check out the instructions here](/blog/2018/07/16/publish-data-as-data-packages/)).

## It's Only Files Online

Publishing your Data Package is incredibly simple: you just need to post it online somewhere that others can access.

**Note:** if you just want to to share your Data Package with a few others you can just send it directly, for example via email. Since a Data Package is just some files there are as many ways to do this as there are ways to put files online. Here we will just provide some general tips and illustrate some of the most popular publishing options.

**Advertise it**

Once you have published your data package you may want to advertise it to others. One way to advertise the existence of your dataset is to add it to the catalog-list file in the [registry repo](https://github.com/datasets/registry/), it will then automagically appear as a community dataset on the [data.okfn.org](http://data.okfn.org/data) site

## Github, Bitbucket etc

One nice option for the more sophisticated is to manage your Data Package in a git or mercurial repo and push it to github, gitorious, bitbucket or similar.

## S3, Google Storage etc

Cloud storage like S3 and Google Storage are perfect for storing your Data Packages.

## Google Drive

The directory structure of a Data Package shared on Google Drive must be flat; that is, the Data Package must not contain any folders.

**OK**
```
shared-folder
|-- datapackage.json
|-- README.md
|-- data.csv
```

**Not OK**
```
shared-folder
|-- datapackage.json
|-- README.md
|-- data
    |-- data.csv
```

1. Upload your Data Package folder ([help][google-drive-upload])

2. Change your folder's share setting to **Public on the web - Anyone on the Internet can find and view** ([help][google-drive-share-settings])

3. Get a shareable link for your folder ([help][google-drive-share])

4. Find your folder's ID in the link
  * *Example Link:*
    * ```https://drive.google.com/open?id=0B-f6D5RM8awSfkdtRWpiTlpxdmhPblJRd2NhdHpHMFZPOFZKcWhpT2NkQlZCUlNWUnFwaHM&authuser=0```
  * *Example ID:*
    * ```0B-f6D5RM8awSfkdtRWpiTlpxdmhPblJRd2NhdHpHMFZPOFZKcWhpT2NkQlZCUlNWUnFwaHM```

5. Your ```datapackage.json``` link is ```https://googledrive.com/host/{ID}/datapackage.json```; for example, using the *Example ID* from the previous step, the ```datapackage.json``` link is:
  * ```https://googledrive.com/host/0B-f6D5RM8awSfkdtRWpiTlpxdmhPblJRd2NhdHpHMFZPOFZKcWhpT2NkQlZCUlNWUnFwaHM/datapackage.json```

[google-drive-upload]: https://support.google.com/drive/answer/2424368
[google-drive-share-settings]: https://support.google.com/drive/answer/2494886
[google-drive-share]: https://support.google.com/drive/answer/2494822

## Dropbox

Just upload your files to Dropbox.

You do need to be a bit careful as Dropbox does not always replicate your local file layout in its online URLs. Therefore, make sure you read the [Key Tips](#key-tips) section below.

## Key Tips

However you publish your Data Package there are a few key points to keep in
mind:

* All the files in the Data Package should be accessible online
* The structure of your Data Package should be preserved. Specifically the paths between your `datapackage.json` and the data files must be preserved. For example, if your Data Package directory looked like this on disk:

      datapackage.json
      data.csv
      somedir/other-data.csv

  then online it should look like:

      http://your.website.com/mydatapackage/datapackage.json
      http://your.website.com/mydatapackage/data.csv
      http://your.website.com/mydatapackage/somedir/other-data.csv

  This can be a problem with services like e.g. Google Drive where files in a given folder don't have a web address that relates to that folder. The reason we need to preserve relative paths is that when using the Data Package client software will compute the full path from the location of the `datapackage.json` itself plus the relative path for the file give in the `datapackage.json` resources section.

Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our new and comprehensive [Frictionless Data Field Guide][field-guide].

[field-guide]: /tag/field-guide
