<template lang="html">
  <div>
    <img class="w-4 h-4 inline text-lg" src="/img/tag.png" alt="Price icons created by Pixel perfect - Flaticon"/>
    <router-link class="pl-2"
      v-for="tag in tags"
      :key="tag"
      :to="{ path: `/tag/${tag}/`}">
      {{tag}}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["tags"]
}
</script>