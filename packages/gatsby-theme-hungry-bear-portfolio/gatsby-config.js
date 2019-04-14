const path = require("path")

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src", "pages"),
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-tslint",
    "gatsby-plugin-emotion"
  ],
}