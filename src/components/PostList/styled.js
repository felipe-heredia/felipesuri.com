import styled from "styled-components";

import { Link } from "gatsby";

export const PostListWrapper = styled.section`
  display: block;
  padding-bottom: 7rem;
`;

export const PostListTitle = styled.h1`
  color: #a7a6a6;
  font-size: 1.3rem;
  padding-bottom: 1.4rem;
`;

export const PostListNav = styled.nav``;

export const PostListButton = styled(Link)`
  cursor: pointer;
  height: auto;
  align-items: left;
  text-decoration: none;
  font-size: 1.2rem;

  color: #a7a6a6;
  transition: color 0.5s;

  &:hover {
    color: #aa52cc;
  }
`;
