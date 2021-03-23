module.exports = {
    siteMetadata: {
        title: `Holium`,
        description: `Holistic data.`,
        author: `@polyphene`,
        url: "https://holium.org",
        image: "/images/polyphene_profile_picture.svg",
        twitterUsername: "@polyphenehq",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Holium`,
                short_name: `Holium`,
                start_url: `/`,
                background_color: `#eeeeee`,
                theme_color: `#b780ff`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/polyphene_icon_256.png`,
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Source Sans Pro'],
                }
            }
        },
        {
            resolve: `gatsby-source-ghost`,
            options: {
                apiUrl: `https://blog.polyphene.io`,
                contentApiKey: `479a351734736fe78ee7b2c7f3`,
            },
        },
        {
            resolve: 'gatsby-plugin-matomo',
            options: {
                siteId: 3,
                matomoUrl: 'https://analytics.polyphene.io',
                siteUrl: 'https://holium.org'
            }
        },
    ],
}
