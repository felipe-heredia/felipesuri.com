// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        strapi {
          articles {
            slug
          }
        }
      }
    `);

    // Create blog articles pages.
    const articles = data.strapi.articles;

    articles.forEach(article => {
      createPage({
        path: `/article/${article.slug}`,
        component: "./src/templates/Article.vue",
        context: {
          slug: article.slug,
        },
      });
    });
  });
};
