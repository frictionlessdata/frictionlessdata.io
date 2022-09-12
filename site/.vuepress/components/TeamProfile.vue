<template>
  <div class="fluer pt-8">
    <div class="avatar rounded-full">
      <img class="rounded-full" v-if="profile.imageUrl"
        :src="profile.imageUrl"
        :alt="profile.name" width=80 height=80>
      <img class="rounded-full" v-else-if="profile.github"
        :src="'https://github.com/' + profile.github + '.png'"
        :alt="profile.name" width=80 height=80>
      <img class="rounded-full" v-else-if="profile.twitter"
        :src="'https://avatars.io/twitter/' + profile.twitter"
        :alt="profile.name" width=80 height=80>
    </div>
    <div class="profile team-font pr-6 text-sm leading-loose">
      <h3 class="text-lg" :data-official-title="profile.title">
        <strong><a style="color:black" target="_blank" :href="githubUrl(profile.github)" title="Open a Github profile">{{ profile.name }}</a></strong>
        <sup v-if="profile.title && titleVisible" v-html="profile.title"></sup>
      </h3>
      <dl>
        <template v-if="false && profile.reposOfficial">
          <div class="container">
              <p v-for="repo in profile.reposOfficial">
                <a :href="githubUrl('fluejs', repo)" target=_blank rel="noopener noreferrer">{{ repo.name || repo }}</a>
              </p>
          </div>
        </template>
        <template v-if="profile.github && profile.reposPersonal">
          <dt>Ecosystem</dt>
          <dd>
            <ul>
              <li v-for="repo in profile.reposPersonal">
                <a :href="githubUrl(profile.github, repo)" target=_blank rel="noopener noreferrer">{{ repo.name || repo }}</a>
              </li>
            </ul>
          </dd>
        </template>
        <template v-if="profile.work">
          <dt>
            <i class="fa fa-briefcase"></i>
            <span class="sr-only">Work</span>
          </dt>
          <div class="container pb-1">
            <img src="/img/suitcase.png" class="inline w-4 h-auto pt-1" alt="Work icons created by Freepik - Flaticon"/>
            <div class="inline pl-2" v-html="workHtml"></div>
          </div>
        </template>
        <span v-if="profile.distanceInKm" class="distance">
          <dt>
            <i class="fa fa-map-marker"></i>
            <span class="sr-only">Distance</span>
          </dt>
          <dd>
            About
            <span
              v-if="profile.distanceInKm <= 150"
              :title="profile.name + ' is close enough to commute to your location.'"
              class="user-match"
            >{{ textDistance }} away</span>
            <template v-else>{{ textDistance }} away</template>
            in {{ profile.city }}
          </dd>
        </span>
        <template v-else-if="profile.city">
          <dt>
            <i class="fa fa-map-marker"></i>
            <span class="sr-only">City</span>
          </dt>
          <div class="container pb-0">
            <img src="/img/planet-earth.png" class="inline w-4 h-auto" alt="World icons created by Freepik - Flaticon"/>
            <div class="inline pl-2">
              {{ profile.city }}
            </div>
          </div>
        </template>
        <template v-if="profile.languages">
          <dt>
            <i class="fa fa-globe"></i>
            <span class="sr-only">Languages</span>
          </dt>
          <!-- TODO: this could now just be a v-for given that we refactored the code to remove using browser lang choice -->
          <div class="container inline-flex py-1">
            <img src="/img/translation.png" class="w-4 h-auto pt-1 pb-2" alt="Extensible markup language icons created by Freepik - Flaticon"/>
            <div v-html="languageListHtml" class="pl-3">
            </div>
          </div>
        </template>
        <template v-if="profile.links">
          <dt>
            <i class="fa fa-link"></i>
            <span class="sr-only">Links</span>
          </dt>
          <div class="container pb-2 inline-flex">
          <img src="https://image.flaticon.com/icons/png/512/126/126481.png" class="w-4 h-auto py-1 pb-4"/>
            <div class="pl-3" v-for="link in profile.links">
                <a :href="link" target=_blank>{{ minimizeLink(link) }}</a>
            </div>
          </div>
        </template>
        <footer class="social" v-if="false && hasSocialLinks">
          <div class="inline-flex">
          <a class="github flex-1" v-if="profile.github" :href="githubUrl(profile.github)">
            <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" class="w-4 h-auto"/>
            <i class="fa fa-github"></i>
            <span class="sr-only">Github</span>
          </a>
          <a class="twitter flex-1 pl-2" v-if="profile.twitter" :href="'https://twitter.com/' + profile.twitter">
            <img src="https://www.stickpng.com/assets/images/58e9196deb97430e819064f6.png" class="w-6 h-auto"/>
            <i class="fa fa-twitter"></i>
            <span class="sr-only">Twitter</span>
          </a>
          <a class="codepen flex-1 pl-2" v-if="profile.codepen" :href="'https://codepen.io/' + profile.codepen">
            <img src="https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-32-512.png" class="w-6 h-auto"/>
            <i class="fa fa-codepen"></i>
            <span class="sr-only">CodePen</span>
          </a>
          <a class="linkedin flex-1 pl-2" v-if="profile.linkedin" :href="'https://www.linkedin.com/in/' + profile.linkedin">
            <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/linkedin-512.png" class="w-6 h-auto"/>
            <i class="fa fa-linkedin"></i>
            <span class="sr-only">LinkedIn</span>
          </a>
          </div>
        </footer>
      </dl>
    </div>
  </div>
</template>

<script>
var languageNameFor = {
  en: 'English',
  nl: 'Nederlands',
  zh: '中文',
  vi: 'Tiếng Việt',
  pl: 'Polski',
  pt: 'Português',
  ru: 'Русский',
  jp: '日本語',
  fr: 'Français',
  de: 'Deutsch',
  el: 'Ελληνικά',
  es: 'Español',
  hi: 'हिंदी',
  fa: 'فارسی',
  ko: '한국어',
  ro: 'Română',
  uk: 'Українська',
  no: 'Norwegian',
  it: 'Italian',
  ne: 'Nepali'
}


export default {
  data () {
		return {
		}
  },
  props: {
    profile: Object,
    titleVisible: Boolean
  },
  computed: {
    workHtml: function () {
      var work = this.profile.work
      var html = ''
      if (work.orgUrl) {
        html += '<a href="' + work.orgUrl + '" target="_blank" rel="noopener noreferrer">'
        if (work.org) {
          html += work.org
        } else {
          this.minimizeLink(work.orgUrl)
        }
        html += '</a>'
      } else if (work.org) {
        html += work.org
      }
      if (work.role) {
        if (html.length > 0) {
          html = work.role + ' @ ' + html
        } else {
          html = work.role
        }
      }
      return html
    },
    textDistance: function () {
      var distanceInKm = this.profile.distanceInKm || 0
      if (this.$root.useMiles) {
        return roundDistance(kmToMi(distanceInKm)) + ' miles'
      } else {
        return roundDistance(distanceInKm) + ' km'
      }
    },
    languageListHtml: function () {
      var vm = this
      if (!vm.profile.languages) return ''
      return (
        vm.profile.languages.map(function (languageCode, index) {
          var language = languageNameFor[languageCode]
          return language
        }).join(', ')
      )
    },
    hasSocialLinks: function () {
      return this.profile.github || this.profile.twitter || this.profile.codepen || this.profile.linkedin
    }
  },
  methods: {
    minimizeLink: function (link) {
      return link
        .replace(/^https?:\/\/(www\.)?/, '')
        .replace(/\/$/, '')
        .replace(/^mailto:/, '')
    },
    /**
     * Generate a GitHub URL using a repo and a handle.
     */
    githubUrl: function (handle, repo) {
      if (repo && repo.url) {
        return repo.url
      }
      if (repo && repo.indexOf('/') !== -1) {
        // If the repo name has a slash, it must be an organization repo.
        // In such a case, we discard the (personal) handle.
        return (
          'https://github.com/' +
          repo.replace(/\/\*$/, '')
        )
      }
      return 'https://github.com/' + handle + '/' + (repo || '')
    }
  }
}
</script>

<style scoped>

.team-core-font {
  text-transform: uppercase;
  font-size: 0.84em;
  font-weight: 500;
}

ul {
  list-style-type: none;
}

.list {
  list-style-type: none;
}

</style>
