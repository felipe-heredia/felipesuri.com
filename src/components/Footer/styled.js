import styled from "styled-components";

import AniLink from "gatsby-plugin-transition-link/AniLink";

export const FooterWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const Container = styled.div`
  text-align: center;
  color: #b8bbd9;
  font-size: 0.9rem;
`;

export const InternalLink = styled(AniLink)`
  color: #b8bbd9;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #6371d2;
  }

  &:before {
    content: "•";
    display: inline-block;
    margin: 0 1rem;
  }
`;

export const ExternalLink = styled.a`
  color: #b8bbd9;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #6371d2;
  }

  &:before {
    content: "•";
    display: inline-block;
    margin: 0 1rem;
  }
`;
