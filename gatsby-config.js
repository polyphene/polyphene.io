module.exports = {
    siteMetadata: {
        title: `Evidence`,
        description: `Restoring faith in the post-trust era.`,
        author: `@evidence-network`,
        url: "https://evidence.fyi",
        image: "/images/evidence_profile_picture.svg",
        twitterUsername: "@evidencehq",
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
                name: `Evidence`,
                short_name: `Evidence`,
                start_url: `/`,
                background_color: `#eeeeee`,
                theme_color: `#b780ff`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/images/evidence_icon_256.png`,
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
                contentApiKey: `479a351734736fe78ee7b2c7f3`,
            },
        },
        {
            resolve: 'gatsby-plugin-matomo',
            options: {
                siteId: 2,
                matomoUrl: 'https://analytics.evidence.fyi',
                siteUrl: 'https://evidence.fyi'
            }
        },
    ],
}
