<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <hr class="hor-line">
    <FooterSidebar />
    <PageEdit />


    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import FooterSidebar from '../components/FooterSidebar.vue'

export default {
  components: { FooterSidebar, PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">

.page
  padding-bottom 2rem
  display block

.hor-line 
  max-width 740px
</style>
