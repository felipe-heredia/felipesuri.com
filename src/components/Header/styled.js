import styled from "styled-components";

import { Link } from "gatsby";

export const HeaderWrapper = styled.aside`
  text-transform: lowercase;
  background: #070708;
  border-bottom: 1px solid #9194ab;
  display: flex;
  position: fixed;
  padding: 0.8rem 0;
  top: 0;
  width: 100%;
  height: 4.063rem;
  justify-content: space-between;
`;

export const HeaderGroup = styled.div`
  margin: auto 100px;
  display: flex;
  align-items: center;
`;

export const HeaderItem = styled(Link)`
  cursor: pointer;
  display: block;
  height: auto;
  align-items: center;
  text-decoration: none;
`;

export const HeaderSiteName = styled.h1`
  font-size: 32px;
  display: block;
  color: #fff;
`;
