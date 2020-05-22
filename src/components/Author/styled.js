import styled from "styled-components";
import media from "styled-media-query";

export const AuthorWrapper = styled.article`
  color: #fff;
  display: column;

  padding-top: 2rem;
  padding-bottom: 2.5rem;

  ${media.lessThan("large")`
    display: none;
  `}
`;

export const AuthorTitle = styled.h1`
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  color: #fff;

  padding-bottom: 26px;
`;

export const AuthorContent = styled.p`
  text-align: justify;
  font-size: 24px;
  line-height: 34px;

  padding-bottom: 14px;
`;
