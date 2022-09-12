<template>
  <main aria-labelledby="main-title" class="page">
    <div class="theme-default-content">
      <header class="hero">
        <h1 id="main-title">{{ data.title }}</h1>
        <p class="description">{{ data.tagline }}</p>
      </header>

      <JobsDiagramSmall class="pt-12"></JobsDiagramSmall>

      <p>{{ data.description }}</p>

      <h2>Context</h2>
      <p>{{ data.context }}</p>
      <p>{{ data.pain }}</p>

      <Content />
    </div>
  </main>
</template>

<script>
import JobsDiagramSmall from "@theme/components/JobsDiagramSmall.vue";

export default {
  components: { JobsDiagramSmall },

  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
.job
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  p
    margin: 50px 0
  h2
    margin: 60px 0 50px
</style>
