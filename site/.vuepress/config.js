require("dotenv").config();
const lodash = require("lodash");
const webpack = require("webpack");

module.exports = {
  title: "Frictionless Data",
  description: "Data software and standards",
  head: [
    ["link", { rel: "icon", href: "img/favicon.ico" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "img/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "img/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "img/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        color: "#000000",
        href: "img/safari-pinned-tab.svg",
      },
    ],
    ["link", { rel: "manifest", href: "img/site.webmanifest" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap",
      },
    ],
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ],
  },
  configureWebpack: (config) => {
    return { plugins: [new webpack.EnvironmentPlugin({ ...process.env })] };
  },
  markdown: {
    linkify: true,
    typographer: true,
    breaks: true,
    html: true,
    toc: {
      includeLevel: [2, 3],
    },
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
    },
  },
  themeConfig: {
    logo: "/img/frictionless-color-full-logo.svg",
    // repo: "https://github.com/frictionlessdata",
    // repoLabel: "GitHub",
    docsBranch: "main",
    docsRepo: "https://github.com/frictionlessdata/frictionlessdata.io",
    docsDir: "site",
    lastUpdated: "Last Updated",
    // defaults to false, set to true to enable
    editLinks: true,
    smoothScroll: true,
    footer_col1_title: "About",
    footer_col1_row1: "About",
    footer_col1_row2: "Contact",
    footer_col1_row3: "Terms of Use",
    footer_col1_row4: "Privacy Policy",
    footer_col2_title: "Help",
    footer_col2_row1: "Support",
    footer_col2_row2: "Get started",
    footer_col2_row3: "Community",
    footer_col2_row4: "Forum",
    footer_col3_title: "More",
    footer_col3_row1: "Reproducible Research",
    footer_col3_row2: "Design Assets",
    footer_col3_row3: "Blog",
    footer_col3_row4: "Contribute",
    footer_col4_title: "Social",
    footer_col4_row1: "GitHub",
    footer_col4_row2: "Twitter",
    footer_col4_row3: "Slack",
    footer_col4_row4: "Matrix",
    footer_col4_row5: "Dev",
    navbar_icon1_link: "https://matrix.to/#/#frictionlessdata:matrix.okfn.org",
    navbar_icon1_image: "/img/home/matrix.svg",
    navbar_icon1_title: "Matrix",
    navbar_icon2_link:
      "https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg",
    navbar_icon2_image: "/img/home/slack-icon.png",
    navbar_icon2_title: "Slack",
    navbar_icon3_link: "https://twitter.com/frictionlessd8a",
    navbar_icon3_image: "/img/home/twitter-icon.svg",
    navbar_icon3_title: "Twitter",
    navbar_icon4_link: "https://github.com/frictionlessdata",
    navbar_icon4_image: "/img/home/github-icon.svg",
    navbar_icon4_title: "GitHub",
    sidebar: "auto",
    nav: [
      {
        text: "Introduction",
        link: "/introduction/",
      },
      { text: "Projects", link: "/projects/" },
      { text: "Universe", link: "/universe/" },
      { text: "Adoption", link: "/adoption/" },
      { text: "People", link: "/people/" },
      { text: "Fellows", link: "https://fellows.frictionlessdata.io/" },
      {
        text: "Development",
        ariaLabel: "Development Menu",
        items: [
          { text: "Architecture", link: "/development/architecture/" },
          { text: "Roadmap", link: "/development/roadmap/" },
          { text: "Process", link: "/development/process/" },
        ],
      },
      {
        text: "Work With Us",
        ariaLabel: "Work With Us Menu",
        items: [
          { text: "Get Help", link: "/work-with-us/get-help/" },
          { text: "Contribute", link: "/work-with-us/contribute/" },
          { text: "Code of Conduct", link: "/work-with-us/code-of-conduct/" },
          { text: "Events Calendar", link: "/work-with-us/events/" },
          {
            text: "Forum",
            link: "https://github.com/frictionlessdata/project/discussions",
          },
          {
            text: "Chat (Slack)",
            link:
              "https://join.slack.com/t/frictionlessdata/shared_invite/zt-17kpbffnm-tRfDW_wJgOw8tJVLvZTrBg",
          },
          {
            text: "Chat (Matrix)",
            link: "https://matrix.to/#/#frictionlessdata:matrix.okfn.org",
          },
        ],
      },
      { text: "Blog", link: "/blog/" },
    ],
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            // Unique ID of current classification
            id: "blog",
            // Target directory
            dirname: "blog",
            // Path of the `entry page` (or `list page`)
            path: "/blog/",
            itemPermalink: "/blog/:year/:month/:day/:slug",
            pagination: {
              lengthPerPage: 10,
            },
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            layout: "Tags",
            scopeLayout: "Tag",
            frontmatter: { title: "Tag" },
          },
        ],
        feed: {
          canonical_base: "https://frictionlessdata.io",
        },
      },
    ],
    [
      "vuepress-plugin-feed",
      {
        canonical_base: "https://frictionlessdata.io",
        sort: (entries) => lodash.reverse(lodash.sortBy(entries, "date")),
      },
    ],
    [
      "vuepress-plugin-dehydrate",
      {
        // disable SSR
        noSSR: "404.html",
        // remove scripts
        noScript: [
          // support glob patterns
          "foo/*.html",
          "**/static.html",
        ],
      },
    ],
    [
      "@limdongjin/vuepress-plugin-simple-seo",
      {
        default_site_name: "Frictionless Data",
        default_image: "/img/frictionless-color-logo.png",
      },
    ],
    ["@vuepress/back-to-top"],
  ],
  head: [
    [
      "script",
      {
        src: "https://plausible.io/js/script.js",
        "data-domain": "frictionlessdata.io",
      },
    ],
    ["script", { src: "https://unpkg.com/honeycomb-grid@3.1.3" }],
    ["script", { src: "https://unpkg.com/svg.js@2.7.1" }],
  ],
};

// TODO: add to the navbar if needed
// {
//   text: "Jobs to be done",
//   items: [
//     { text: "Create Visualizations", link: "/jobs/create-visualizations/" },
//     { text: "Do Analysis and Machine Learning", link: "/jobs/do-analysis-and-machine-learning/" },
//     { text: "Do Initial Data Exploration", link: "/jobs/do-initial-data-exploration/" },
//     { text: "Document Dataset", link: "/jobs/document-dataset/" },
//     { text: "Find Datasets", link: "/jobs/find-datasets/" },
//     { text: "Gracefully Scale Scope", link: "/jobs/gracefully-scale-scope/" },
//     { text: "Gracefully Scale Size", link: "/jobs/gracefully-scale-size/" },
//     { text: "Have a Data Hub", link: "/jobs/have-a-data-hub/" },
//     { text: "Orchestrate Data Platform", link: "/jobs/orchestrate-data-platform/" },
//     { text: "Pipeline transformations", link: "/jobs/pipeline-transformations/" },
//     { text: "Pull Dataset", link: "/jobs/pull-dataset/" },
//     { text: "Push Dataset", link: "/jobs/push-dataset/" },
//     { text: "Quickly edit dataset", link: "/jobs/quickly-edit-dataset/" },
//     { text: "Store Dataset", link: "/jobs/store-dataset/" },
//     { text: "Validate Dataset", link: "/jobs/validate-dataset/" },
//     { text: "Version dataset", link: "/jobs/version-dataset/" }
//   ]
// },
