import styled from "styled-components";

import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileWrapper = styled.aside`
  text-transform: lowercase;
`;

export const ProfileItem = styled(AniLink)`
  cursor: pointer;
  display: block;
  height: auto;
  align-items: center;
  text-decoration: none;
`;

export const SiteName = styled.h1`
  font-size: 32px;
  display: block;
  color: #fff;
  transition: color 1s;

  &:hover {
    color: #aa52cc;
  }
`;
