module.exports = {
    siteMetadata: {
        title: `Evidence`,
        description: `Restoring faith in the post-trust era.`,
        author: `@evidence_network`,
        url: "https://evidence.fyi",
        image: "/images/evidence_profile_picture.svg",
        twitterUsername: "@evidence_network",
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
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Evidence`,
                short_name: `Evidence`,
                start_url: `/`,
                background_color: `#eeeeee`,
                theme_color: `#b780ff`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/evidence_icon_2_256.png`,
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
                apiUrl: `https://blog.evidence.fyi`,
                contentApiKey: `149874a7203f6488187f27f5d5`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
