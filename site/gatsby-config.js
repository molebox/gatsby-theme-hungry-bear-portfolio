module.exports = {
    __experimentalThemes: [
       { 
           resolve: 'gatsby-theme-hungry-bear-portfolio',
            options: {
                test: 'This is from the users config'
            }
        }
    ],
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-tslint",
        "gatsby-plugin-emotion"
    ]
}