const path = require("path")

module.exports = (options) => {
  const {test} = options;

  return {
    siteMetadata: {
      test: test
    },
    plugins: [
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
      "gatsby-plugin-typescript",
      "gatsby-plugin-tslint",
      "gatsby-plugin-emotion"
    ]
  }
}