import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Author from "../components/Author";
import PostItem from "../components/PostItem";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
            frontmatter {
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Author />
      {postList.map(
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
    </Layout>
  );
};

export default IndexPage;
