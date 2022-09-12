---
title: Learning how to validate research data -  A Fellows blog
date: 2021-01-30
tags: ['fellows']
category:
image: /img/introduction/report.png
description: Interested in learning more about how you can validate your data? Read on to see how the Frictionless Fellows validated their research data and learn their tips and tricks!
author: Lilly Winfree
---

Have you ever heard a data horror story about Excel automatically changing all numbers into dates without so much as a warning? Have you ever accidentally entered a wrong data value into a spreadsheet, or accidentally deleted a cell? What if there was an easy way to detect errors in data types and content? Well there is! That is the main goal of Goodtables, the Frictionless data validation service, and also the `Frictionless-py` `validate` function. Interested in learning more about how you can validate your data? Read on to see how the Frictionless Fellows validated their research data and learn their tips and tricks!

:::tip
Click on the links below to read the whole blog.
::: 

### [Don't you wish your table was as clean as mine? By Monica Granados](https://fellows.frictionlessdata.io/blog/monica-goodtables-blog/) (Cohort 1)
“How many times have you gotten a data frame from a colleague or downloaded data that had missing values? Or it’s missing a column name? Do you wish you were never that person? Well introducing Goodtables – your solution to counteracting bad data frames! As part of the inaugural Frictionless Data Fellows, I took Goodtables out for a spin.”

### [Validando datos un paquete a la vez by Sele Yang](https://fellows.frictionlessdata.io/blog/sele-goodtables-blog/) (Cohort 1)
“Yo trabajé con la base de datos que vengo utilizando para el programa que se encuentra en mi repositorio de Github. Es una base de datos geográficos sobre clínicas de aborto descargada desde OpenStreetMap a través de OverpassTurbo….Goodtables es una herramienta muy poderosa, que nos permite contar contar con la posibilidad de validación constante y de forma simple para mantener nuestras bases de datos en condiciones óptimas, no sólo para nuestro trabajo, sino también para la reproducción y uso de los mismos por otras personas.”

### [Tabular data: Before you use the data by Ouso Daniel](https://fellows.frictionlessdata.io/blog/ouso-goodtables-blog/) (Cohort 1)
“I want to talk about goodtables, a Frictionless data (FD) tool for validating tabular data sets. As hinted by the name, you only want to work on/with tabular data in good condition; the tool highlights errors in your tabular dataset, with the precision of the exact location of your error. Again, the beautiful thing about FD tools is that they don’t discriminate on your preferences, it encompasses the Linux-based CLI, Python, GUI folks, among other languages.”

### [Data Validation Of My Interview Dataset Using Goodtables by Lily Zhao](https://fellows.frictionlessdata.io/blog/lily-goodtables-blog/) (Cohort 1)
“I used goodtables to validate the interview data we gathered as part of the first chapter of my PhD. These data were collected in Mo'orea, French Polynesia where we interviewed both residents and scientists regarding the future of research in Mo'orea….Amplifying local involvement and unifying the perspectives of researchers and coastal communities is critical not only in reducing inequity in science, but also in securing lasting coral reef health.”

### [Walking through the `frictionless` framework by Jacqueline Maasch](https://fellows.frictionlessdata.io/blog/jacqueline-goodtables-blog/) (Cohort 2)
“While the GoodTables web server is a convenient tool for automated data validation, the frictionless framework allows for validation right within your Python scripts. We'll demonstrate some key frictionless functionality, both in Python and command line syntax. As an illustrative point, we will use a CSV file that contains an invalid element – a remnant of careless file creation.”

### [Validating your data before sharing with the community by Dani Alcalá-López](https://fellows.frictionlessdata.io/blog/dani-goodtables-blog/) (Cohort 2)
“Once we have decided to share our data with the rest of the world, it is important to make sure that other people will be able to reuse it. This means providing as much metadata as possible, but also checking that there are no errors in the data that might prevent others from benefiting from our data. Goodtables is a simple tool that you can use both on the web and in the command-line interface to carry out this verification process”

### [Goodtables blog by Sam Wilairat](https://fellows.frictionlessdata.io/blog/sam-goodtables-blog/) (Cohort 2)
“Now let's try validating the same data using the Goodtables command line tool! ….Once the installation is complete, type "goodtables path/to/file.csv". You will either receive a green message stating that the data is valid, or a red message, like the one I have shown below, showing that the data is not valid!”

### [Using goodtables to validate metadata from multiple sequencing runs by Kate Bowie](https://fellows.frictionlessdata.io/blog/kate-goodtables-blog/) (Cohort 2)
“Here, I will show you how I used a schema and GoodTables to make sure my metadata files could be combined, so I can use them for downstream microbial diversity analysis….It's extremely helpful that GoodTables pointed this ### [error] out, because if I tried to combine these metadata files in R with non-matching case as it is here, then it would create TWO separate columns for the metadata….Now I will be able to combine these metadata files together and it will make my data analysis pipeline a lot smoother.”

### [Reflecting on 'datafication', data prep, and UTF-8 with goodtables.io by Anne Lee Steele](https://fellows.frictionlessdata.io/blog/anne-goodtables-blog/) (Cohort 2)
“Before I knew it, it was 2021, and revisiting my data in the new year has made me realize just how much time and efforts goes into cleaning, structuring, and formatting datasets – and how much more goes into making them understandable for others (i.e. through Frictionless' data-package). I'd always thought of these processes as a kind of black box, where 'data analysis' simply happens. But in reality, it's the fact that we've been spending so much time on preparatory work that points to how important these processes actually are: and how much goes into making sure that data can be used before analyzing it in the first place.”

### [Validate it the GoodTables way! By Evelyn Night](https://fellows.frictionlessdata.io/blog/evelyn-goodtables-blog/) (Cohort 2)
“Errors may sometimes occur while describing data in a tabular format and these could be in the structure; such as missing headers and duplicated rows, or in the content for instance assigning the wrong character to a string. Some of these errors could be easily spotted by naked eyes and fixed during the data curation process while others may just go unnoticed and later impede some downstream analytical workflows. GoodTables are handy in flagging down common errors that come with tabular data handling as it recognises these discrepancies fast and efficiently to enable users debug their data easily. ”

### [Using the frictionless framework for data validation by Katerina Drakoulaki](https://fellows.frictionlessdata.io/blog/katerina-goodtables-blog/) (Cohort 2)
“Thus, similar to what the data package creator and goodtables.io does, frictionless detects your variables and their names, and infers the type of data. However, it detected some of my variables as strings, when they are in fact integers. Of course, goodtables did not detect this, as my data were generally -in terms of formatting- valid. Not inferring the right type of data can be a problem both for future me, but also for other people looking at my data.”
