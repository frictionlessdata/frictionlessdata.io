<template>
  <div class="banner pt-8">
    <main class="main-section hero-home">
      <div class="content flex flex-wrap items-center px-24" style="padding-top:2rem">
        <div class="tagline black-text flex-1">
          <h1 class="text-5xl">Data Software and Standards</h1>
          <p class="text-xl md:w-4/5 font-thin w-auto">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
          <div class="flex flex-row flex-wrap" style="justify-content:flex-start">
          <a
            class="bg-transparent hero-button text-xl text-black outline-none cursor-pointer border border-solid border-black font-medium text-sm py-4 px-6 hover:border-transparent rounded-full"
            href="#video-section"
          >Why Frictionless Data?</a>
          <a
            class="bg-primary hover:bg-secondary text-white text-xl cursor-pointer outline-none text-sm font-medium sm:ml-4 mt-2 sm:mt-0 py-4 px-6 rounded-full"
            href="/introduction/"
          >Get Started</a>
          </div>
        </div>
        <div class="box flex-1 pl-10">
          <img class="w-11/12 pt-10" v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'toolbox'" />
        </div>
      </div>

      <section class="bg-primary py-8" v-if="data.features && data.features.length">
        <div class="inner-container features text-black flex flex-row flex-wrap items-center content-center">
          <div class="feature md:flex-1 px-12" v-for="(feature, index) in data.features" :key="index">
            <h3>{{ feature.title }}</h3>
            <p class="">{{ feature.details }}</p>
          </div>
        </div>
      </section>
    </main>
    <Content class="theme-default-content custom" />
  </div>
</template>

<script>
import Vue from "vue";

export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  }
};
</script>

<style lang="stylus">
.hero-home {
  background: radial-gradient(70% 70% at 50% 100%, #e8e8e8 0%, #fafafa 100%);
}

.content {
  padding-top: 5rem;
  padding-bottom: 2rem;
  margin: 0 4rem;
}

.smalltext {
  color: rgb(153, 153, 153);
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
}

@media (max-width: $MQMobile) {
  .content {
    padding-top: 4rem;
    margin: 0 0.5rem;
  }
}

@media (max-width: $MQMobileNarrow) {
  .content {
    padding-top: 4rem;
    margin: 0 0.5rem;
  }
}

.text-blue {
  color: #CFE1E6;
}

.bg-orange:hover {
  background-color: #FFD278;
}

.hero-button:hover {
  background-color: #e077ff;
  color: white
}

</style>
