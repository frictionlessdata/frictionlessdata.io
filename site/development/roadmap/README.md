---
title: Frictionless Roadmap
---

# Frictionless Roadmap

<ul class="timeline">
<li class="done">
  <a target="_blank" href="https://framework.frictionlessdata.io/">Frictionless Framework (v4)</a>
  <a href="#" class="float-right">Dec 2020</a>
  <p>A new Frictionless Framework is a full rework of the previous generation software stack composed by tabulator/tableschema/datapackage/etc libraries</p>
</li>

<li class="done">
  <a target="_blank" href="https://repository.frictionlessdata.io/">Frictionless Repository (v1)</a>
  <a href="#" class="float-right">Jun 2021</a>
  <p>Data management service that brings continuous data validation to tabular data in your repository via Github Action</p>
</li>

<li class="done">
  <a target="_blank" href="https://framework.frictionlessdata.io/">Livemark (beta)</a>
  <a href="#" class="float-right">Dec 2021</a>
  <p>Data presentation framework for Python that generates static sites from extended Markdown with interactive charts, tables, scripts, and other features</p>
</li>

<li class="done">
  <a target="_blank" href="https://repository.frictionlessdata.io/">Frictionless Repository (v2)</a>
  <a href="#" class="float-right">Sep 2022</a>
  <p>Frictionless Repository is updated to Frictionless Framework v5</p>
</li>

<li class="done">
  <a target="_blank" href="https://framework.frictionlessdata.io/">Frictionless Framework (v5)</a>
  <a href="#" class="float-right">Dec 2022</a>
  <p>A year since the first framework release we published a new version with some low-level breaking changes.</p>
</li>

<li class="done">
  <a target="_blank" href="">Frictionless Application (beta)</a>
  <a href="#" class="float-right">Mar 2023</a>
  <p>We finalised our the first part of our application work and beta-release it to a broad audience.</p>
</li>

<li class="done">
  <a target="_blank" href="">Data Package (v2)</a>
  <a href="#" class="float-right">Jun 2024</a>
  <p>The Data Package working group releases the v2 of the Frictionless standard</p>
</li>

<li class="current">
  <a target="_blank" href="">Frictionless Application (v1)</a>
  <a href="#" class="float-right">Dec 2025</a>
  <p>We're going to publish a stable release version of Frictionless Application</p>
</li>
</ul>

<style>
ul.timeline {
    list-style-type: none;
    position: relative;
    font-size: 120%;
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 40px;
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #000;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}

ul.timeline > li.done:before {
    background: green;
}

ul.timeline > li.current:before {
    background: yellow;
}
</style>
