import styled from "styled-components";
import media from "styled-media-query";

export const PostListWrapper = styled.section`
  display: block;
  padding-bottom: 0.9rem;

  ${media.lessThan("large")`
    padding: 0 0.9rem 0.3rem; 
  `}
`;

export const PostListTitle = styled.h1`
  color: #a7a6a6;
  font-size: 1.3rem;
  padding-bottom: 1.4rem;

  ${media.lessThan("large")`
    font-size: 1rem;
  `}
`;

export const PostListNav = styled.nav``;
