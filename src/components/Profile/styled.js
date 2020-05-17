import styled from "styled-components";

import { Link } from "gatsby";

export const ProfileWrapper = styled.aside`
  text-transform: lowercase;
`;

export const ProfileItem = styled(Link)`
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
