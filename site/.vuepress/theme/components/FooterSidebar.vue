<template>
  <footer>
    <div class="banner footer-sb page-edit flex flex-row">
      <div class="container flex flex-row">
        <div class="container">
          <p class="">{{ $site.themeConfig.footer_col1_title }}</p>
          <ul class="">
            <li><a href="/about/">{{ $site.themeConfig.footer_col1_row1 }}</a></li>
            <li><a href="/work-with-us/get-help/">{{ $site.themeConfig.footer_col1_row2 }}</a></li>
            <li><a href="https://okfn.org/privacy-policy/">{{ $site.themeConfig.footer_col1_row4 }}</a></li>
            <li><a href="https://okfn.org/terms-of-use/">{{ $site.themeConfig.footer_col1_row3 }}</a></li>
          </ul>
        </div>
        <div class="container">
          <p class="">{{ $site.themeConfig.footer_col2_title }}</p>
          <ul class="">
            <li>
              <a href="/contribute/">{{ $site.themeConfig.footer_col2_row1 }}</a>
            </li>
            <li>
              <a href="/guide/">{{ $site.themeConfig.footer_col2_row2 }}</a>
            </li>
            <li>
              <a href="https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg">{{ $site.themeConfig.footer_col2_row3 }}</a>
            </li>
          </ul>
        </div>
        <div class="container">
          <p class="">{{ $site.themeConfig.footer_col3_title }}</p>
          <ul class="">
            <li><a href="/reproducible-research/">{{ $site.themeConfig.footer_col3_row1 }}</a></li>
            <li>
              <a href="/design/">{{ $site.themeConfig.footer_col3_row2 }}</a>
            </li>
            <li>
              <a href="/blog/">{{ $site.themeConfig.footer_col3_row3 }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

ul {
  list-style-type: none;
  padding-left: 0;
}

li > a:hover {
  font-weight: 600;
}
</style>
