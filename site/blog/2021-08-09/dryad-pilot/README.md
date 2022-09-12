---
title: Frictionless Data and Dryad join forces to validate research data
date: 2021-08-09
tags: ['pilot']
category:
image: /img/adoption/dryad.png
description: A great way to share research data is to upload it to a repository, but how do we ensure that uploaded data doesn't have issues? Frictionless Data and Dryad join forces to revamp the upload page for the Dryad application, now including the Frictionless validation functionality to check for data quality.
author: Daniella Lowenberg and Lilly Winfree 
---
What happens to scientific data after it is generated? The answer is complicated - sometimes that data is shared with other researchers, sometimes it is hidden away on a private hard drive. Sharing research data is a key part of open science, the movement to make research more accessible and usable by everyone to drive faster advances in science. A great way to share research data is to upload it to a repository, but simply uploading data is not the final step here. Ideally, the uploaded data will be of high quality - that is, it won’t have errors or missing data, and it will have enough descriptive information that other researchers can also use it! Over the last 6 months, we collaborated with the data repository Dryad to make it easier for researchers to upload their high quality data for sharing.

[Dryad](https://datadryad.org/stash) is a community-led data repository that allows researchers to submit data from any field, which not only promotes open science, but also helps researchers comply with open data policies from funders and journals. Because Dryad accepts all kinds of data, they need to curate that data for quality and ensure that the data does not present risk, and have comprehensive metadata to reuse the data. We quickly realized our shared goals, and formed a Pilot collaboration to  add Frictionless validation functionality to the Dryad data upload page. Both teams agreed how important it is to give researchers immediate feedback about their data as they are submitting it so they can make edits in that moment, and learn about data best practices. 

The outcome of this collaboration is a revamped upload page for the Dryad application. Researchers uploading tabular data (CSV, XLS, XLSX) under 25MB will have the files automatically validated using the Frictionless tool. These checks are based on the built-in validation of Frictionless Framework (read the validation guide [here](https://framework.frictionlessdata.io/docs/guides/validation-guide)), and include checking for data errors such as blank cells, missing headers, or incorrectly formatted data. The Frictionless report will help guide researchers on which issues should be resolved, allowing researchers to edit and re-upload files before submitting their dataset for curation and publication.

![Screen Shot 2021-08-06 at 8 10 41 AM](https://user-images.githubusercontent.com/74717970/128690898-2095f1c7-060d-4398-ac92-33f65c068c4c.png)  
*When a data file is uploaded, researchers can see if the data passed the Tabular Data Checks or if there are any issues. Clicking to “View 1 Issues” shows more details describing the error.*

![Screen Shot 2021-08-06 at 8 12 01 AM](https://user-images.githubusercontent.com/74717970/128690994-16be9845-59ec-4f3b-9b76-28a163dfa1e3.png)
*This uploaded data file has a blank header. With this information, the researcher can fix the error and re-upload the data.*

This work was funded by the Sloan Foundation as part of the Frictionless Data for Reproducible Research project. This project was truly collaboratory - most of the technical work was completed by contractor Cassiano Reinert Novais dos Santos with supervision and support from the Dryad team: Daniella Lowenberg, Scott Fisher, Ryan Scherle, and the CDL UX team (Rachael Hu and John Kratz); as well as support from the Frictionless team, Evgeny Karev, Lilly Winfree, and Sara Petti. If you have any feedback on the Dryad upload page, please let us know!
