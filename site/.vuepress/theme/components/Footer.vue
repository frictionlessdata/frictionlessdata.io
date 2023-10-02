<template>
  <footer class="main-section footer-bg xs:py-12 xs:-ml-24">
    <div class="flex flex-col">
      <div class="flex sm:p-5 justify-center">
        <div class="footer-items flex flex-row flex-wrap w-2/3 sm:p-5">
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-4"> Supported by </div>
          <li><a href="https://sloan.org/"><img class="w-32 mx-auto py-5" src="/img/home/alfred.svg"></img></a><li>
          <li><a href="https://theodi.org/"><img class="w-32 mx-auto" src="/img/home/opendata.svg"></img></a></li>
        </div>
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-2 xs:pt-4"> {{ $site.themeConfig.footer_col1_title }} </div>
          <li class="pt-4"><a href="/about/" class=""> {{ $site.themeConfig.footer_col1_row1 }} </a><li>
          <li class="pt-4"><a href="/work-with-us/get-help/" class=""> {{ $site.themeConfig.footer_col1_row2 }} </a></li>
          <li class="pt-4"><a href="https://okfn.org/terms-of-use/" class=""> {{ $site.themeConfig.footer_col1_row3 }} </a></li>
          <li class="pt-4"><a href="https://okfn.org/privacy-policy/" class=""> {{ $site.themeConfig.footer_col1_row4 }} </a></li>
        </div>
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-2 xs:pt-4"> {{ $site.themeConfig.footer_col2_title }} </div>
          <li class="pt-4"><a href="/support/" class=""> {{ $site.themeConfig.footer_col2_row1 }} </a><li>
          <li class="pt-4"><a href="/guide/" class=""> {{ $site.themeConfig.footer_col2_row2 }} </a></li>
          <li class="pt-4"><a href="https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg" class=""> {{ $site.themeConfig.footer_col2_row3 }} </a></li>
          <li class="pt-4"><a href="https://github.com/frictionlessdata/project/discussions" class=""> {{ $site.themeConfig.footer_col2_row4 }} </a></li>
        </div>
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-2 xs:pt-4"> {{ $site.themeConfig.footer_col3_title }} </div>
          <li class="pt-4"><a href="/reproducible-research/" class=""> {{ $site.themeConfig.footer_col3_row1 }} </a><li>
          <li class="pt-4"><a href="/design/" class=""> {{ $site.themeConfig.footer_col3_row2 }} </a></li>
          <li class="pt-4"><a href="/blog/" class=""> {{ $site.themeConfig.footer_col3_row3 }} </a></li>
          <li class="pt-4"><a href="/contribute/" class=""> {{ $site.themeConfig.footer_col3_row4 }} </a></li>
        </div>
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-2 xs:pt-4"> {{ $site.themeConfig.footer_col4_title }} </div>
          <li class="pt-4"> <a href="https://twitter.com/frictionlessd8a" class="inline font-light text-base">
            <img class="pr-2 align-middle social-link-icon" src="/img/home/twitter.svg" />
            {{ $site.themeConfig.footer_col4_row2 }}</a>
          <li>
          <li class="pt-4">
            <a href="https://github.com/frictionlessdata" class="font-light text-base">
              <img class="pr-2 align-middle social-link-icon" src="/img/home/github.svg" />
              {{ $site.themeConfig.footer_col4_row1 }}
            </a>
          </li>
          <li class="pt-4">
            <a href="https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg" class="font-light text-base">
              <img class="pr-2 align-middle social-link-icon" width="27" src="/img/home/slack-icon.png"></img>
              {{ $site.themeConfig.footer_col4_row3 }}
            </a>
          </li>
          <li class="pt-4">
            <a href="https://matrix.to/#/#frictionlessdata:matrix.okfn.org" class="font-light text-base">
              <img class="pr-2 align-middle social-link-icon" width="27" src="/img/home/matrix.svg"></img>
              {{ $site.themeConfig.footer_col4_row4 }}
            </a>
          </li>
        </div>
      </div>
      </div>
    <div class="flex sm:px-5 justify-center footer-logo">
      <div class="flex flex-row flex-wrap w-2/3 sm:p-5">
        <div class="container sm:w-1/5 lg:w-1/4">
          <a href="/" class="xs:-mx-8">
            <img src="/img/frictionless-full-logo-blackfont-nobackground.svg" class="h-12 pl-8 pt-12" />
          </a>
        </div>
        <div class="container lg:w-1/5">
          <a href="https://okfn.org/" class="xs:-mx-8">
            <img src="/img/home/okfn.svg" class="h-12 pl-8 pt-12" />
          </a>
        </div>
        <div class="container lg:w-1/5">
          <a href="https://www.datopian.com/" class="xs:-mx-8">
            <img src="/img/home/datopian.svg" class="h-12 pl-8 pt-12" />
          </a>
        </div>

      </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

li {
  list-style: none;
}

.footer-bg {
  background-color: #00d1ff;
  border-top: 1px solid #cfe1e6;
}

li > a {
  color:black;
  font-weight: 700;
  font-size: 1rem;
}

li > a:hover {
  color: white;
}

.footer-title {
  color: black;
  font-size: 1.1rem;
  font-weight: 700;
}
.footer-items{
  margin-left: 8em;
}

.footer-logo{
  margin-left: 2.5em;
}

.bottom-padding{
  padding-bottom: 1em;
}
</style>
