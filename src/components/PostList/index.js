import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";

import PostItem from "components/PostItem";
import ButtonLink from "components/ButtonLink";

const PostList = () => {
  const { allMarkdownRemark, site } = useStaticQuery(graphql`
    query PostList {
      site {
        siteMetadata {
          thumbGeneratorUrl
        }
      }
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
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
  const thumbGeneratorUrl = site.siteMetadata.thumbGeneratorUrl

  return (
    <S.PostListWrapper>
      <S.PostListTitle>Últimos artigos</S.PostListTitle>
      <S.PostListNav>
        {postList.map(
          ({
            node: {
              frontmatter: { category, date, title, description },
              timeToRead,
              fields: { slug },
            },
          }) => 
          (
            <PostItem
              key={slug}
              slug={slug}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              thumbUrl={`${thumbGeneratorUrl}/api/thumbnail.png?title=${title}`}
            />
          )
        )}
      </S.PostListNav>
      <ButtonLink to="/blog/" direction="right">
        Veja todos os artigos
      </ButtonLink>
    </S.PostListWrapper>
  );
};

export default PostList;
