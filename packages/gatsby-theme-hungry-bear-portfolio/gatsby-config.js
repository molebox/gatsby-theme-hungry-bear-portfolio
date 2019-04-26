const path = require("path")

module.exports = (options) => {

  // Passed in from the consuming gatsby site
  const {title, description, author, url, twitterUsername} = options;

  return {
    siteMetadata: {
      title,
      description,
      author,
      url,
      twitterUsername
    },
    plugins: [
      "gatsby-plugin-react-helmet",
      {
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: path.join(__dirname, "src", "pages"),
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: path.join(__dirname, "src", "pages"),
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Montserrat`,
            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ]
        }
      },
      "gatsby-plugin-typescript",
      "gatsby-plugin-tslint",
      "gatsby-plugin-emotion",
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp"
    ]
  }
}