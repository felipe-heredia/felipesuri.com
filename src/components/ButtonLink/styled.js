import styled from "styled-components";
import { Link } from "gatsby";

export const ButtonLinkWrapper = styled.section`
  padding-bottom: 1.9rem;
`;

export const ButtonLink = styled(Link)`
  color: #aa52cc;
  display: inline-block;
  font-size: 1.1rem;
  text-decoration: none;

  position: relative;
  will-change: transform;

  &:after {
    background-color: #aa52cc;
    content: "";
    height: 2px;
    margin-top: 0.5rem;
    left: 0;
    position: absolute;
    top: 100%;
    transform: scaleX(0);
    transition: transform 0.5s;
    width: 100%;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
