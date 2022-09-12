<template>
  <main aria-labelledby="main-title" class="page">
    <div class="theme-default-content">
      <header>
        <h1 style="margin-top: -8px">{{ $page.frontmatter.title }}</h1>
        <p v-if="$page.frontmatter.summary" class="text-xl pb-6">{{ $page.frontmatter.summary }} </p>
        <time class="italic"> {{ formatDate($page.frontmatter.date) }} by {{ $page.frontmatter.author || "Frictionless Data" }} </time>
        <BlogTag class="pt-4 text-blue-500 pb-6" :tags="$page.frontmatter.tags"/>
      </header>
      <Content />
      <!-- <Vssue :title="$page.frontmatter.title" /> -->
      <footer class="text-xl mt-10">
        <a href="/blog/">Blog Index</a>
      </footer>
      </div>
    </div>
  </main>
</template>

<script>
import { formatDate } from '../util'
import BlogTag from './BlogTag'

export default {
  components: {
    BlogTag
  },
  methods: {
    formatDate
  }
}
</script>

