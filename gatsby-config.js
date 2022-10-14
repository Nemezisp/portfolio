module.exports = {
  siteMetadata: {
    title: `PJ-Portfolio`,
    siteUrl: `https://nemezisp.github.io/portfolio/`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },     
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png',
    },
  }],
  pathPrefix: "/portfolio",
};