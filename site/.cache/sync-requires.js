const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\HUNGRY BEAR STUDIO\\GATSBY-THEMES\\gatsby-theme-hungry-bear-portfolio\\site\\.cache\\dev-404-page.js"))),
  "component---packages-gatsby-theme-hungry-bear-portfolio-src-pages-index-tsx": hot(preferDefault(require("D:\\HUNGRY BEAR STUDIO\\GATSBY-THEMES\\gatsby-theme-hungry-bear-portfolio\\packages\\gatsby-theme-hungry-bear-portfolio\\src\\pages\\index.tsx"))),
  "component---src-pages-test-page-tsx": hot(preferDefault(require("D:\\HUNGRY BEAR STUDIO\\GATSBY-THEMES\\gatsby-theme-hungry-bear-portfolio\\site\\src\\pages\\TestPage.tsx")))
}

