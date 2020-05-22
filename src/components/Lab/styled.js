import styled from "styled-components";
import media from "styled-media-query";

export const LabWrapper = styled.article`
  margin-bottom: 1.2rem;
  padding: 2.1rem;
  color: #fff;
  height: 100%;

  ${media.lessThan("large")`
    padding: 1.5rem;
  `}
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
