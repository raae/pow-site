const deployUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "http://localhost:9000";

module.exports = {
  siteMetadata: {
    name: "POW!",
    url: process.env.DEPLOY_PRIME_URL || deployUrl,
    canonicalUrl: "https://usepow.app",
    twitterCreator: "@raae",
    twitterSite: "",
    contact: {
      email: `hello@usepow.app`,
      address: `Tromsøgata 26, 0565 Oslo, Norway`,
    },
    greeting: `Made with ❤ <br/>by <a href="https://twitter.com/raae">@raae</a> and family.`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "@raae/gatsby-source-youtube-oembed",
      options: {
        youTubeIds: [
          "eRTJPIa39a4", // Why make POW!
          "Bk1jonYPFD4", // Celebrating POW!
          "TzJfepDjpzM", // POW! Focus Friday
          "nS36D2zUkvA", // JSConf Budapest
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
      __key: "content",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `@raae/gatsby-theme-mui`,
    },
  ],
};
