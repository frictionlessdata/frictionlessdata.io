<template>
<footer class="main-footer">
  <div class="master">
  <div class="flex flex-row flex-wrap gap-4">
    <div class="flex-none">
      <a target="_blank" href="https://okfn.org">
        <img src="/img/footer/lg-okfn-black.svg" class="h-20" alt="Open Knowledge Foundation">
      </a>
    </div>
      <ul class="flex flex-wor flex-grow gap-10 justify-end items-center">
      <li><a href="https://us9.list-manage.com/subscribe?u=73f922f8e68e21a10efa21f02&id=32d370a7fc" target="_blank"><img src="/img/footer/mailinglist.svg"></a></li>
      <li><a href="https://github.com/okfn" target="_blank"><img src="/img/footer/github.svg"></a></li>
      <li><a href="https://www.linkedin.com/company/open-knowledge-foundation/" target="_blank"><img src="/img/footer/linkedin.svg"></a></li>
      <li><a href="https://fosstodon.org/@okfn" target="_blank"><img src="/img/footer/mastodon.svg"></a></li>
      <li><a href="https://twitter.com/okfn" target="_blank"><img src="/img/footer/x.svg"></a></li>
      <li><a href="https://www.youtube.com/@OpenKnowledgeFoundation/videos" target="_blank"><img src="/img/footer/youtube.svg"></a></li>
      <li><a href="https://flickr.com/photos/okfn/" target="_blank"><img src="/img/footer/flickr.svg"></a></li>
      </ul>
  </div>
  <div class="flex flex-row flex-wrap justify-between gap-10 py-4">
    <div class="w-1/4">
      OKFN is a not-for-profit organisation incorporated in England & Wales with company number 05133759.
      </br>
      </br>
      <a href="mailto:info@okfn.org" target="_blank">info@okfn.org</a>
    </div>
        <ul class="w-3/5 grid grid-cols-4 grid-rows-3 text-left">
          <li><a target="_blank" href="https://okfn.org/privacy-policy/">Privacy policy</a></li>
          <li><a target="_blank" href="https://okfn.org/terms-of-use/">Terms of use</a></li>
          <li><a target="_blank" href="https://okfn.org/newsroom/#resources">Brand Guidelines</a></li>
          <li><a target="_blank" href="https://okfn.org/network">Open Knowledge Network</a></li>
          <li><a target="_blank" href="https://okfn.org/ip-policy/">IP policy</a></li>
          <li><a target="_blank" href="https://okfn.org/code-of-conduct/">Code of conduct</a></li>
          <li><a target="_blank" href="https://okfn.org/who-we-are/governance">Governance</a></li>
          <li><a target="_blank" href="https://network.okfn.org/project/">Project repository</a></li>
          <li><a target="_blank" href="https://okfn.org/cookie-policy/">Cookie policy</a></li>
          <li><a target="_blank" href="https://okfn.org/en/jobs/">Jobs & Opportunities</a></li>
          <li><a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=RRFW36P7AQUJL">Donate</a></li>
          <li><a target="_blank" href="https://network.okfn.org/specialist/">Global Directory</a></li>
        </ul>
  </div>
  <div class="flex flex-col items-left">
  <div class="flex flex-row items-center gap-4 mb-4">
      <a href="https://en.wikipedia.org/wiki/MIT_License"><img src="/img/footer/subfooter/license.png"></a>
      <div>Source code available under the MIT license.</div>
  </div>
  <div class="flex flex-row items-center gap-4 mb-4"> 
    <a href="https://creativecommons.org/licenses/by/4.0/"><img src="/img/footer/subfooter/creative-commons.png"></a>
    <div>Content on this site, made by Open Knowledge, is licensed under a Creative Commons Attribution 4.0 International License.</div>
  </div>
  <div class="flex flex-row items-center gap-4 mb-4">
    <a href="https://okfn.org/en/who-we-are/governance/"><img src="/img/footer/subfooter/ngo-source.png"></a>
    <div>Open Knowledge is certified by NGOsource in accordance with the Equivalency Determination (ED).</div>
  </div>
  <div class="flex flex-row items-center gap-4 mb-4">
    <a href="https://www.ckan.org"><img width="82px" src="/img/footer/subfooter/ckan.svg"></a>
    <div>CKAN assets are held in trust by Open Knowledge, with best practice policies on governing openly and for use of the trademark.</div>
  </div>
  <div class="flex flex-row items-center gap-4 mb-4">
    <a href="https://www.digitalpublicgoods.net/"><img src="/img/footer/subfooter/dpga.png"></a>
    <div>Open Knowledge is part of the Digital Public Goods Alliance, accelerating the attainment of the Sustainable Development Goals.</div>
  </div>
  </div>
  </div>
</footer>

</template>

<style scoped>

.main-footer {
    background-color: rgb(0 209 255);
    padding-top: 3rem;
    padding-bottom: 3rem;
}

.main-footer .master {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 84rem;
}

a {
    font-weight: 700;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    color: inherit;
    text-decoration: inherit;
}
a:hover {
  color: white;
}

li {
  list-style: none;
}

</style>
