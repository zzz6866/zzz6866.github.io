require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteHeadline: `감자박`,
    siteDescription: `감자박 개발 노트`,
    siteUrl: `https://zzz6866.github.io`,
    showLineNumbers: false,
    siteTitle: `감자박 개발 노트`,
    siteTitleAlt: `감자박 개발 노트`,
    author: `감자박`,
    siteLanguage: `KR`,
    siteImage: `/banner.png`,
    tagsPath: `/tags`,
    basePath: `/blog`,
    blogPath: `/blog`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        mdx: false, // Config .mdx .md below in gatsby-plugin-mdx (showCaptions 사용시 에러 발생으로 false 처리)
        // feedTitle: 'Kaan Uzdoğan\'s Personal Site',
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Tags`,
            slug: `/tags`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          // {
          //   name: `Twitter`,
          //   url: `https://twitter.com/lekoarts_de`,
          // },
          // {
          //   name: `Instagram`,
          //   url: `https://www.instagram.com/lekoarts.de/`,
          // },
        ],
        formatString: 'YYYY. MM. DD',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              backgroundColor: 'transparent',
              quality: 100,
              // wrapperStyle: "max-height: 450px",
              linkImagesToOriginal: true,
              showCaptions: true,
            },
          },
          {
            resolve: 'gatsby-remark-mermaid',
            options: {
              language: 'mermaid',
              theme: 'default',
              /*viewport: {
                width: 200,
                height: 200
              },
              mermaidOptions: {
                themeCSS: ".node rect { fill: cornflowerblue; }"
              }*/
            }
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
