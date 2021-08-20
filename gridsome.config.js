// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const strapiURL = process.env.GRIDSOME_STRAPI_URL || "http://localhost:1338";

module.exports = {
  siteName: "felipesuri",
  titleTemplate: "%s | felipesuri VueJS Developer",
  plugins: [
    {
      use: "@gridsome/source-graphql",
      options: {
        url: strapiURL + "/graphql",
        fieldName: "strapi",
        typeName: "strapiTypes"
      }
    },
    {
      use: "gridsome-plugin-sass-resources-loader",
      options: {
        resources: [
          "@/assets/scss/colors.scss",
          "@/assets/scss/import_defaults.scss"
        ]
      }
    }
  ]
};
