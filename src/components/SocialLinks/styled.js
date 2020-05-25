import styled from "styled-components";

import AniLink from "gatsby-plugin-transition-link/AniLink";

export const SocialLinksWrapper = styled.nav`
  margin: auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: inline-flex;
  list-style: none;
`;

export const SocialLinksItem = styled.li`
  margin: auto 0.6rem;
`;

export const SocialLinksLinkInternal = styled(AniLink)`
  color: #f2f2f2;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #aa52cc;
  }
`;

export const SocialLinksLinkExternal = styled.a`
  color: #f2f2f2;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #aa52cc;
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 24px;
  height: 24px;
`;
