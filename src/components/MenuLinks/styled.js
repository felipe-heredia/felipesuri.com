import styled from "styled-components";

import { Link } from "gatsby";

export const MenuLinksWrapper = styled.nav`
  margin: auto;
  width: 100%;
`;

export const MenuLinksList = styled.ul`
  align-items: center;
  display: inline-flex;
  justify-content: space-around;
  list-style: none;
`;

export const MenuLinksItem = styled.li`
  margin: auto 0.6rem;
`;

export const MenuLinksLink = styled(Link)`
  color: #f2f2f2;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #aa52cc;
  }
`;
