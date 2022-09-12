<template>
  <div>
    <h1>{{$page.frontmatter.layout}}</h1>
    <ul v-for="tag in Object.keys($frontmatterKey._metaMap)">
      <h3>
        <a :href="$frontmatterKey._metaMap[tag].path">{{ tag }}</a>
      </h3>
      <li v-for="post in $frontmatterKey._metaMap[tag].posts">
        <router-link :to="post.path">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
