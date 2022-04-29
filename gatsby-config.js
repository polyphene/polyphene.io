module.exports = {
  siteMetadata: {
    title: `Polyphene`,
    description: `Give people the freedom to collaborate.`,
    author: `@polyphenehq`,
    siteUrl: "https://polyphene.io",
    image: "/assets/polyphene_profile_picture.svg",
    twitterUsername: "@polyphenehq",
  },
  plugins: [
    "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Polyphene`,
        short_name: `Polyphene`,
        start_url: `/`,
        background_color: `#eeeeee`,
        theme_color: `#b780ff`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/assets/polyphene_icon_256.png`,
      },
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: 2,
        matomoUrl: "https://analytics.polyphene.io",
        siteUrl: "https://polyphene.io",
      },
    },
  ],
}
