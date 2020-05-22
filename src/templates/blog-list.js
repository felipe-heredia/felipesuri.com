import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import PostItem from "../components/PostItem";
import ButtonLink from "../components/ButtonLink";

const BlogList = props => {
  const list = props.data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <ButtonLink to="/" direction="left">
        ← Voltar para a home
      </ButtonLink>
      {list.map(
        ({
          node: {
            frontmatter: { category, date, title, description },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
      <ButtonLink to="/" direction="left">
        ← Voltar para a home
      </ButtonLink>
    </Layout>
  );
};

export const BlogListQuery = graphql`
  query BlogListQuery($limit: Int!) {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: $limit) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            category
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
