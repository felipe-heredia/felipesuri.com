import styled from "styled-components";

import { Link } from "gatsby";

export const LabWrapper = styled.article`
  margin-bottom: 1.2rem;
  padding: 35px;
  color: #fff;
  height: 100%;
`;

export const LabTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 15px;
`;

export const LabDescription = styled.p`
  font-size: 18px;
  font-weight: 30px;
  margin-bottom: 36px;
`;

export const LabButton = styled(Link)`
  cursor: pointer;
  height: auto;
  align-items: left;
  text-decoration: none;
  font-size: 1.2rem;

  color: #fff;
  transition: color 0.5s;

  &:hover {
    color: #aa52cc;
  }
`;
