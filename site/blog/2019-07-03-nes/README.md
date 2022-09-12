---
title: "Tool Fund Grantee: Carlos Eduardo Ribas and João Alexandre Peschanski"
date: 2019-07-03
tags: ["tool-fund"]
author: Carlos Eduardo Ribas, João Alexandre Peschanski, and Lilly Winfree
category: grantee-profiles-2019
image: /img/blog/carlos.jpg
# description: Tool Fund Grantee - NES
---

This grantee profile features Carlos Eduardo Ribas and João Alexandre Peschanski from the Neuroscience Experiments System (NES) for our series of Frictionless Data Tool Fund posts, written to shine a light on Frictionless Data’s Tool Fund grantees, their work and to let our technical community know how they can get involved.

<!-- more -->

## Meet Carlos, João, and RIDC NeuroMat

João Alexandre Peschanski is the [Cásper Líbero ](https://en.wikipedia.org/wiki/Faculdade_C%C3%A1sper_L%C3%ADbero)Professor of Digital Media and Computational Journalism and the research supervisor of the dissemination team of the [Research, Innovation and Dissemination Center for Neuromathematics](https://en.wikipedia.org/wiki/NeuroMat) (RIDC NeuroMat), from the São Paulo Research Foundation. He is also the president of the [Wiki Movimento Brasi](https://meta.wikimedia.org/wiki/Wikimedia_Community_User_Group_Brasil)l, the Brazilian affiliate of the Wikimedia movement. As an academic, he has worked on open crowdsourcing resources as well as structured narratives and semantic web.

Carlos Eduardo Ribas is the leading software developer at the RIDC NeuroMat. He holds a position at the [University of São Paulo](https://en.wikipedia.org/wiki/University_of_S%C3%A3o_Paulo) as a systems analyst. He is the development team leader of the [Neuroscience Experiments System](https://github.com/neuromat/nes).

The RIDC NeuroMat is a research center established in 2013 at the University of São Paulo, in Brazil. Among the core missions of NeuroMat are the development of open-source computational tools, keeping an active role under the context of open knowledge, open science and scientific dissemination. The NeuroMat project was recently renewed until July 31, 2024.

## How did you first hear about Frictionless Data and why did you apply for a Tool Fund grant?

We learned about the Tool Fund from an [announcement](https://br.okfn.org/2019/02/21/open-knowledge-internacional-anuncia-fundo-para-ferramenta-de-frictionless-data/) in Portuguese that was posted by Open Knowledge Brasil. The Frictionless Data Tool Fund grant is also an opportunity to connect with like-minded professionals and their projects, and eventually building and supporting a community deeply engaged with the development of open science and tools.

Public databases are seen as crucial by many members of the neuroscientific community as a means of moving forward more effectively in understanding the functioning and treatment of brain pathologies. However, only open data are not enough, it should be created in a way that can be easily shared and used. Data and metadata should be readable by researchers and machines and Frictionless Data can certainly help with this.

In our case, NES and the NeuroMat Open Database were developed to establish a standard for data collection in neuroscientific experiments. The standardization of data collection is key for reproducible science. The advantages of the Frictionless Data approach for us is fundamentally to be able to standardize data opening and sharing within the scientific community.

## What specific issues are you looking to address with the Tool Fund?

NES is an open-source tool being developed that aims to assist neuroscience research laboratories in routine procedures for data collection. NES was developed to store a large amount of data in a structured way, allowing researchers to seek and share data and metadata of neuroscience experiments. To the best of our knowledge, there are no open-source software tools which provide a way to record data and metadata involved in all steps of an electrophysiological experiment and also register experimental data and its fundamental provenance information. With the anonymization of sensitive information, the data collected using NES can be publicly available through the [NeuroMat Open Database](https://neuromatdb.numec.prp.usp.br/), which allows any researcher to reproduce the experiment or simply use the data in a different study.

The system already has some features ready to use, such as Participant registration, Experiment management, Questionnaire management and Data exportation. Some types of data that NES deals with are tasks, stimuli, instructions, EEG, EMG, TMS and questionnaires. Questionnaires are produced with [LimeSurvey](https://www.limesurvey.org/) (an open-source software).

We propose to change the NES to rely on the philosophy for Frictionless Data. The data exportation module can be adjusted to reflect the set of specifications for data and metadata interoperability and also to be in the Data Package format, as well as any other feature to be in accordance to the philosophy proposed. A major feature to be developed is a JSON file "descriptor" with initial information related to the experiment. However, as sensitive information may be presented at this stage, public access to such data will be done after the anonymization and submission of the experiment to the NeuroMat Open Database.  

To bring NES to the philosophy for Frictionless Data opens up an opportunity for scientists to have access not only to a universe of well-documented and labeled data, but also to understand the process that generated this data.

## How can the open data, open source, community engage with the work you are doing around Frictionless Data and NES?

The source code is available on [GitHub](https://github.com/neuromat/nes) ([documentation link](https://nes.readthedocs.io/en/latest/)). The development has been done on Django framework. The license is Mozilla Public License Version 2.0. NES is an open source project managed using the Git version control system, so contributing is as easy as forking the project and committing your enhancements.

As the RIDC NeuroMat has published [elsewhere](https://neuromat.numec.prp.usp.br/content/in-defense-of-public-scientific-data-sharing-a-neuromat-op-ed/), the work on NES is part of a broader agenda for the development of a database that allows public access to neuroscientific data (physiological measures and functional assessments). We hope our engagement with the Frictionless Data community will open up possibilities of sharing and partnering up for moving this agenda forward.
