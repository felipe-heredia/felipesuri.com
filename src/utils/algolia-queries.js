const postsQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC } ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
          category
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

const flaten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }));

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flaten(data.posts.edges),
    indexName: "artigos",
    settings: {
      attributesToSnippet: ["excerpt:20"],
    },
  },
];

module.exports = queries;
