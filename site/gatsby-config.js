module.exports = {
    __experimentalThemes: [
       { 
           resolve: 'gatsby-theme-hungry-bear-portfolio',
            options: {
                title: 'Hungry Bear Gatsby Theme',
                description: 'The is a description of the wesbite',
                author: 'Hungry Bear Studio'
            }
        }
    ],
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-tslint",
        "gatsby-plugin-emotion"
    ]
}