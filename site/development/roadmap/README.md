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
  <a href="#" class="float-right">Jul 2021</a>
  <p>Data management service that brings continuous data validation to tabular data in your repository via Github Action</p>
</li>

<li class="done">
  <a target="_blank" href="https://framework.frictionlessdata.io/">Livemark (MVP)</a>
  <a href="#" class="float-right">Dec 2021</a>
  <p>Data presentation framework for Python that generates static sites from extended Markdown with interactive charts, tables, scripts, and other features</p>
</li>

<li class="done">
  <a target="_blank" href="https://framework.frictionlessdata.io/">Frictionless Framework (v5.beta)</a>
  <a href="#" class="float-right">Jun 2022</a>
</li>

<li class="current">
  <a target="_blank" href="https://framework.frictionlessdata.io/">Frictionless Framework (v5)</a>
  <a href="#" class="float-right">Sep 2022</a>
  <p>A year since the first framework release we're going to publish a new version with some low-level breaking changes.</p>
</li>

<li class="done">
  <a target="_blank" href="https://repository.frictionlessdata.io/">Frictionless Repository (v2)</a>
  <a href="#" class="float-right">Sep 2022</a>
  <p>Frictionless Repository is going to be updated to Frictionless Framework v5</p>
</li>

<li class="current">
  <a target="_blank" href="">Frictionless Application (MVP)</a>
  <a href="#" class="float-right">Sep 2022</a>
</li>

<li>
  <a target="_blank" href="">Frictionless Application (v1)</a>
  <a href="#" class="float-right">Dec 2022</a>
  <p>We're looking forward to finish our application work and release it to a broad audience.</p>
</li>

<li>
  <a target="_blank" href="https://livemark.frictionlessdata.io/">Livemark (v1)</a>
  <a href="#" class="float-right">Jun 2023</a>
  <p>Data presentation framework for Python that generates static sites from extended Markdown is going to be released</p>
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
